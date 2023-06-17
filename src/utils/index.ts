export const fetcher = async (
  resoure: RequestInfo,
  init?: RequestInit,
): Promise<any> => {
  const res = await fetch(resoure, init);

  if (!res.ok) {
    const errorRes = await res.json();
    const error = new Error(
      errorRes.message ?? 'API 요청 중에 에러가 발생했습니다.',
    );

    throw error;
  }

  return res.json();
};
