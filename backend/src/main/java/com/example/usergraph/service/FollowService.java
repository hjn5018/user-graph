package com.example.usergraph.service;

import com.example.usergraph.dto.FollowResponse;
import com.example.usergraph.repository.FollowRepository;
import java.util.List;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

/**
 * 사용자 간의 팔로우 관계 정보를 다루는 비즈니스 로직 서비스 클래스입니다.
 */
@Service
@RequiredArgsConstructor
@Transactional(readOnly = true)
public class FollowService {

    private final FollowRepository followRepository;

    /**
     * DB 상의 모든 팔로우 관계 목록을 조회하고, FollowResponse DTO 리스트로 변환하여 반환합니다.
     *
     * @return FollowResponse 목록 리스트
     */
    public List<FollowResponse> getFollows() {
        return followRepository.findAll()
                .stream()
                .map(FollowResponse::from)
                .toList();
    }
}

