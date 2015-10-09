import Rx, { Subject} from 'rx';
import request from 'superagent';
const baseUrl = 'http://localhost:3000/dark-jedis/3616';

export function fetchJedis(limit, master, apprentice) {
  const urlSource = new Subject();
  const respSource = new Subject();
  const proxySource = new Subject();
  const requests = [];

  // Handle Jedi responses
  respSource.subscribe((jedi) => {
    proxySource.onNext(jedi);
    [master && jedi.master, apprentice && jedi.apprentice].
      filter((j) => j != undefined && j.url != undefined).
      forEach((j) => urlSource.onNext(j.url || ''));
  });

  // Fetch urls
  urlSource.distinct((jedi) => jedi).subscribe((url) => {
    console.log(url);
      const req = request.get(url).end((e, res) => respSource.onNext(res.body));
      requests.push(req);
  });

  // Clean up when we reach the limit
  respSource.bufferWithCount(limit).subscribe(() => {
    [proxySource, urlSource, respSource].forEach((s) => s.onCompleted());
    requests.forEach((req) => req.abort());
  })

  urlSource.onNext(baseUrl);

  return proxySource;
}
