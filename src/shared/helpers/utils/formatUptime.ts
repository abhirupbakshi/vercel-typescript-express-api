export function formatUptime(seconds: number): string {
  const pad = (sec: number): string => {
    return (sec < 10 ? '0' : '') + sec;
  };
  const hours = Math.floor(seconds / (60 * 60));
  const minutes = Math.floor((seconds % (60 * 60)) / 60);
  seconds = Math.floor(seconds % 60);
  return `${pad(hours)} : ${pad(minutes)} : ${pad(seconds)}`;
}
