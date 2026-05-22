package com.example.usergraph.service;

import com.example.usergraph.dto.FollowResponse;
import com.example.usergraph.repository.FollowRepository;
import java.util.List;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@RequiredArgsConstructor
@Transactional(readOnly = true)
public class FollowService {

    private final FollowRepository followRepository;

    public List<FollowResponse> getFollows() {
        return followRepository.findAll()
                .stream()
                .map(FollowResponse::from)
                .toList();
    }
}
