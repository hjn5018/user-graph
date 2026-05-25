package com.example.usergraph;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

/**
 * 사용자 관계 그래프(User Graph) 애플리케이션의 메인 진입점 클래스입니다.
 * Spring Boot 애플리케이션을 구동하고 초기 구성을 설정합니다.
 */
@SpringBootApplication
public class UserGraphApplication {

    /**
     * 애플리케이션을 실행하는 메인 메서드입니다.
     * Spring Boot 내장 WAS를 구동하고 애플리케이션 컨텍스트를 초기화합니다.
     *
     * @param args 실행 인자 파라미터
     */
    public static void main(String[] args) {
        SpringApplication.run(UserGraphApplication.class, args);
    }
}

