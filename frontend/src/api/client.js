import axios from 'axios';

// 백엔드 API 서버의 베이스 URL 설정 (환경 변수 우선 적용, 없을 시 기본 로컬 URL 사용)
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:8080/api';

// 공통 설정을 적용한 Axios 인스턴스 생성
const apiClient = axios.create({
  baseURL: API_BASE_URL,
});

/**
 * 백엔드 서버로부터 모든 사용자 목록을 가져옵니다.
 * @returns {Promise<Array>} 사용자 정보 객체 배열
 */
export const getUsers = async () => {
  const response = await apiClient.get('/users');
  return response.data;
};

/**
 * 백엔드 서버로부터 모든 팔로우 관계 목록을 가져옵니다.
 * @returns {Promise<Array>} 팔로우 관계 객체 배열 (followerId, followingId 등 포함)
 */
export const getFollows = async () => {
  const response = await apiClient.get('/follows');
  return response.data;
};

