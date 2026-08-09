export async function onRequestGet(context) {
  const { env } = context;

  const { results } = await env.DB.prepare(
    `
    SELECT 
      c.category_key AS category,
      c.title,
      c.caption,
      GROUP_CONCAT(i.r2_key, ',') AS r2KeysString
    FROM categories c
    LEFT JOIN category_images i ON c.id = i.category_id
    GROUP BY c.id
    ORDER BY c.display_order ASC
  `
  ).all();

  const formattedData = results.map((row) => ({
    category: row.category,
    title: row.title,
    caption: row.caption,
    r2Keys: row.r2KeysString ? row.r2KeysString.split(",") : [],
  }));

  return Response.json(formattedData);
}
