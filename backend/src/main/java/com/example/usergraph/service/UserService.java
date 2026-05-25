package com.example.usergraph.service;

import com.example.usergraph.dto.UserResponse;
import com.example.usergraph.repository.UserRepository;
import java.util.List;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

/**
 * 사용자 정보와 관련된 비즈니스 로직을 처리하는 서비스 클래스입니다.
 */
@Service
@RequiredArgsConstructor
@Transactional(readOnly = true)
public class UserService {

    private final UserRepository userRepository;

    /**
     * DB의 모든 사용자를 조회한 후, UserResponse DTO 리스트로 변환하여 반환합니다.
     *
     * @return UserResponse 목록 리스트
     */
    public List<UserResponse> getUsers() {
        return userRepository.findAll()
                .stream()
                .map(UserResponse::from)
                .toList();
    }
}

