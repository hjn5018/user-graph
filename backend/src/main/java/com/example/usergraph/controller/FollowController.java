package com.example.usergraph.controller;

import com.example.usergraph.dto.FollowResponse;
import com.example.usergraph.service.FollowService;
import java.util.List;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/follows")
@RequiredArgsConstructor
public class FollowController {

    private final FollowService followService;

    @GetMapping
    public List<FollowResponse> getFollows() {
        return followService.getFollows();
    }
}
