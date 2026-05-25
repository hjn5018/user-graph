package com.example.usergraph.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

/**
 * 애플리케이션의 교차 출처 리소스 공유(CORS) 설정을 담당하는 설정 클래스입니다.
 * 프런트엔드 애플리케이션(React)이 백엔드 API에 정상적으로 접근할 수 있도록 허용합니다.
 */
@Configuration
public class CorsConfig {

    /**
     * CORS 설정을 위한 WebMvcConfigurer 빈을 생성합니다.
     * 
     * @return CORS 설정이 적용된 WebMvcConfigurer 객체
     */
    @Bean
    public WebMvcConfigurer corsConfigurer() {
        return new WebMvcConfigurer() {
            @Override
            public void addCorsMappings(CorsRegistry registry) {
                // /api/ 로 시작하는 모든 엔드포인트에 대해 CORS 설정을 적용합니다.
                registry.addMapping("/api/**")
                        // 허용할 프런트엔드 개발 서버 출처(Origin)를 명시합니다.
                        .allowedOrigins("http://localhost:5173", "http://127.0.0.1:5173")
                        // GET 메서드로의 요청만 허용하도록 제한합니다.
                        .allowedMethods("GET");
            }
        };
    }
}

