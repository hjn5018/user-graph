package com.example.usergraph.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

/**
 * 사용자 간의 팔로우 관계를 표현하는 JPA 엔티티 클래스입니다.
 * N:M 관계의 대리 테이블 역할을 수행합니다.
 */
@Entity
@Getter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class Follow {

    /**
     * 팔로우 관계 고유 식별 ID (기본키, 자동 생성)
     */
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    /**
     * 팔로우를 한 사용자(행위자)의 User ID
     */
    private Long followerId;

    /**
     * 팔로우를 받은 사용자(대상자)의 User ID
     */
    private Long followingId;
}

