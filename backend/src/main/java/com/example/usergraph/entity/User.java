package com.example.usergraph.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

/**
 * 서비스의 회원 정보 데이터를 표현하는 JPA 엔티티 클래스입니다.
 * 'users' 테이블에 매핑됩니다.
 */
@Entity
@Table(name = "users")
@Getter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class User {

    /**
     * 사용자 고유 식별 ID (기본키, 자동 생성)
     */
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    /**
     * 사용자 이름
     */
    private String name;

    /**
     * 사용자 소개글 (Bio)
     */
    private String bio;

    /**
     * 사용자 전화번호/연락처
     */
    private String contact;

    /**
     * 사용자 이메일 주소
     */
    private String email;
}

