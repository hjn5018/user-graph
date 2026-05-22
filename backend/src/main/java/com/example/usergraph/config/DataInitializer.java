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

@Component
@RequiredArgsConstructor
public class DataInitializer implements CommandLineRunner {

    private final UserRepository userRepository;
    private final FollowRepository followRepository;

    @Override
    public void run(String... args) {
        List<User> users = userRepository.saveAll(createUsers());
        followRepository.saveAll(createFollows(users));
    }

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

    private List<Follow> createFollows(List<User> users) {
        Random random = new Random(7);
        List<Follow> follows = new ArrayList<>();

        for (User follower : users) {
            int followCount = 2 + random.nextInt(3);
            List<Long> usedIds = new ArrayList<>();

            while (usedIds.size() < followCount) {
                User following = users.get(random.nextInt(users.size()));
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
