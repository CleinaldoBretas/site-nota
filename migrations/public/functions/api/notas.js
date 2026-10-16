export async function onRequestGet({ env, request }) {
  const aluno = new URL(request.url).searchParams.get("aluno") ?? "";
  const { results } = await env.DB
    .prepare("SELECT * FROM notas WHERE aluno = ?")
    .bind(aluno)
    .all();
  return Response.json(results);
}
