export async function onRequestGet(context) {
  const { key } = context.params;

  const object = await context.env.HIS_FRAME_BUCKET.get(key);

  if (!object) {
    return new Response("Image Not Found", { status: 404 });
  }

  return new Response(object.body);
}
