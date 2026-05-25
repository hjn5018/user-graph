package com.example.usergraph.dto;

import com.example.usergraph.entity.Follow;

/**
 * 팔로우 관계 정보의 API 응답 형식을 정의하는 DTO Record 클래스입니다.
 * 
 * @param id 팔로우 관계 식별자 ID
 * @param followerId 팔로우를 하는 사용자 ID (Follower)
 * @param followingId 팔로우를 받는 대상 사용자 ID (Following)
 */
public record FollowResponse(
        Long id,
        Long followerId,
        Long followingId
) {
    /**
     * Follow 엔티티 객체로부터 FollowResponse DTO 객체를 생성하는 정적 팩토리 메서드입니다.
     *
     * @param follow 변환할 Follow 엔티티
     * @return 변환된 FollowResponse DTO
     */
    public static FollowResponse from(Follow follow) {
        return new FollowResponse(
                follow.getId(),
                follow.getFollowerId(),
                follow.getFollowingId()
        );
    }
}

