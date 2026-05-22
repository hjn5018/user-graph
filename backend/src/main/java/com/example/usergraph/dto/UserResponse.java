package com.example.usergraph.dto;

import com.example.usergraph.entity.User;

public record UserResponse(
        Long id,
        String name,
        String bio,
        String contact,
        String email
) {
    public static UserResponse from(User user) {
        return new UserResponse(
                user.getId(),
                user.getName(),
                user.getBio(),
                user.getContact(),
                user.getEmail()
        );
    }
}
