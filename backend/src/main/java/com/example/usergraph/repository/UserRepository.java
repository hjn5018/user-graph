package com.example.usergraph.repository;

import com.example.usergraph.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 * User 엔티티에 대한 데이터베이스 액세스 처리를 담당하는 Spring Data JPA 리포지토리 인터페이스입니다.
 */
public interface UserRepository extends JpaRepository<User, Long> {
}

