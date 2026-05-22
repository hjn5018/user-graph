package com.example.usergraph.dto;

import com.example.usergraph.entity.Follow;

public record FollowResponse(
        Long id,
        Long followerId,
        Long followingId
) {
    public static FollowResponse from(Follow follow) {
        return new FollowResponse(
                follow.getId(),
                follow.getFollowerId(),
                follow.getFollowingId()
        );
    }
}
