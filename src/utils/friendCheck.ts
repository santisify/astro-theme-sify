export interface FriendStatus {
  url: string;
  status: 'up' | 'down' | 'checking';
  responseTime?: number;
}

export async function checkFriendStatus(url: string): Promise<FriendStatus> {
  const start = Date.now();
  try {
    const res = await fetch(url, {
      method: 'HEAD',
      mode: 'no-cors',
      signal: AbortSignal.timeout(5000),
    });
    return { url, status: 'up', responseTime: Date.now() - start };
  } catch {
    return { url, status: 'down', responseTime: Date.now() - start };
  }
}

export async function checkAllFriends(urls: string[]): Promise<Map<string, FriendStatus>> {
  const results = new Map<string, FriendStatus>();

  const promises = urls.map(async (url) => {
    results.set(url, { url, status: 'checking' });
    const status = await checkFriendStatus(url);
    results.set(url, status);
  });

  await Promise.allSettled(promises);
  return results;
}
