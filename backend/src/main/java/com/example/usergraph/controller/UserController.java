package com.example.usergraph.controller;

import com.example.usergraph.dto.UserResponse;
import com.example.usergraph.service.UserService;
import java.util.List;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * 사용자 정보와 관련된 API 요청을 처리하는 컨트롤러 클래스입니다.
 */
@RestController
@RequestMapping("/api/users")
@RequiredArgsConstructor
public class UserController {

    private final UserService userService;

    /**
     * 전체 사용자 목록을 조회하여 반환합니다.
     *
     * @return UserResponse 객체들의 리스트
     */
    @GetMapping
    public List<UserResponse> getUsers() {
        return userService.getUsers();
    }
}

