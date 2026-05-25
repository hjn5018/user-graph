package com.example.usergraph.config;

import com.example.usergraph.entity.Follow;
import com.example.usergraph.entity.User;
import com.example.usergraph.repository.FollowRepository;
import com.example.usergraph.repository.UserRepository;
import java.util.ArrayList;
import java.util.List;
import java.util.Random;
import lombok.RequiredArgsConstructor;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

/**
 * 애플리케이션 시작 시 데이터베이스에 초기 테스트용 더미 데이터를 추가하는 초기화 컴포넌트입니다.
 * 20명의 가상 사용자와 각 사용자당 임의의 팔로우 관계를 생성하여 인메모리(혹은 설정된) DB에 저장합니다.
 */
@Component
@RequiredArgsConstructor
public class DataInitializer implements CommandLineRunner {

    private final UserRepository userRepository;
    private final FollowRepository followRepository;

    /**
     * 애플리케이션이 구동된 직후 실행되는 실행 메서드입니다.
     * 사용자 및 팔로우 초기 데이터 생성을 수행하고 리포지토리에 저장합니다.
     */
    @Override
    public void run(String... args) {
        // 1. 초기 사용자 20명 정보 생성 및 DB 저장
        List<User> users = userRepository.saveAll(createUsers());
        // 2. 저장된 사용자 간의 랜덤한 팔로우 관계 생성 및 DB 저장
        followRepository.saveAll(createFollows(users));
    }

    /**
     * 임의의 사용자 목록을 생성하는 내부 헬퍼 메서드입니다.
     * 
     * @return 생성된 20명의 User 리스트
     */
    private List<User> createUsers() {
        String[] names = {
                "Alex Kim", "Bella Lee", "Chris Park", "Dana Choi", "Evan Jung",
                "Fiona Han", "Gavin Seo", "Hana Kang", "Ian Moon", "Judy Shin",
                "Kevin Yoon", "Lina Hong", "Mason Lim", "Nora Baek", "Owen Kwon",
                "Priya Song", "Quinn Jang", "Rina Nam", "Sam Yoo", "Tina Oh"
        };

        List<User> users = new ArrayList<>();
        for (int i = 0; i < names.length; i++) {
            users.add(User.builder()
                    .name(names[i])
                    .bio("관계 그래프 서비스의 " + (i + 1) + "번째 사용자입니다.")
                    .contact("010-1000-" + String.format("%04d", i + 1))
                    .email(names[i].toLowerCase().replace(" ", ".") + "@example.com")
                    .build());
        }

        return users;
    }

    /**
     * 저장된 사용자 리스트를 기반으로 랜덤한 팔로우 관계를 생성하는 내부 헬퍼 메서드입니다.
     * 
     * @param users 전체 사용자 리스트
     * @return 생성된 팔로우 관계 리스트
     */
    private List<Follow> createFollows(List<User> users) {
        // 일관된 난수 발생을 위해 시드값(7) 지정
        Random random = new Random(7);
        List<Follow> follows = new ArrayList<>();

        for (User follower : users) {
            // 각 사용자당 2개 ~ 4개의 팔로우를 갖도록 설정
            int followCount = 2 + random.nextInt(3);
            List<Long> usedIds = new ArrayList<>();

            while (usedIds.size() < followCount) {
                // 랜덤하게 한 명을 선택하여 팔로잉 대상 지정
                User following = users.get(random.nextInt(users.size()));
                
                // 자기 자신을 팔로우하거나 이미 팔로우한 사용자인 경우는 건너뜀
                if (follower.getId().equals(following.getId()) || usedIds.contains(following.getId())) {
                    continue;
                }

                usedIds.add(following.getId());
                follows.add(Follow.builder()
                        .followerId(follower.getId())
                        .followingId(following.getId())
                        .build());
            }
        }

        return follows;
    }
}

