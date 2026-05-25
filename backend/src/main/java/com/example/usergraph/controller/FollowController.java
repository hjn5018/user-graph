package com.example.usergraph.controller;

import com.example.usergraph.dto.FollowResponse;
import com.example.usergraph.service.FollowService;
import java.util.List;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * 사용자 간의 팔로우(Follow) 관계 정보와 관련된 API 요청을 처리하는 컨트롤러 클래스입니다.
 */
@RestController
@RequestMapping("/api/follows")
@RequiredArgsConstructor
public class FollowController {

    private final FollowService followService;

    /**
     * 전체 팔로우 관계 목록을 조회하여 반환합니다.
     *
     * @return FollowResponse 객체들의 리스트
     */
    @GetMapping
    public List<FollowResponse> getFollows() {
        return followService.getFollows();
    }
}

