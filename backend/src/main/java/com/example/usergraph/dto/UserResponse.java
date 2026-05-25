package com.example.usergraph.dto;

import com.example.usergraph.entity.User;

/**
 * 사용자 정보의 API 응답 형식을 정의하는 DTO Record 클래스입니다.
 * 
 * @param id 사용자 식별자 ID
 * @param name 사용자 이름
 * @param bio 사용자 한 줄 소개(Bio)
 * @param contact 사용자 연락처 정보
 * @param email 사용자 이메일 주소
 */
public record UserResponse(
        Long id,
        String name,
        String bio,
        String contact,
        String email
) {
    /**
     * User 엔티티 객체로부터 UserResponse DTO 객체를 생성하는 정적 팩토리 메서드입니다.
     *
     * @param user 변환할 User 엔티티
     * @return 변환된 UserResponse DTO
     */
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

