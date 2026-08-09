export async function onRequestGet(context) {
  const { env, params } = context;

  const key = Array.isArray(params.path) ? params.path.join("/") : params.path;

  if (!key) {
    return new Response("이미지 경로가 지정되지 않았습니다.", { status: 400 });
  }

  const object = await env.HIS_FRAME_BUCKET.get(key);

  if (!object) {
    return new Response(`이미지를 찾을 수 없습니다: ${key}`, { status: 404 });
  }

  const headers = new Headers();
  object.writeHttpMetadata(headers);
  headers.set("etag", object.httpEtag);
  headers.set("cache-control", "public, max-age=31536000");

  return new Response(object.body, {
    headers,
  });
}
