const { MongoClient } = require("mongodb");

// URL de conexão (se estiver rodando localmente)
const url = "mongodb://127.0.0.1:27017";
const client = new MongoClient(url);

async function conectar() {
  try {
    await client.connect();
    console.log("🟢 Conectado ao MongoDB!");

    // Selecionar o banco de dados e a coleção
    const db = client.db("meuBanco");
    const colecao = db.collection("usuarios");

    // Inserir um documento
    await colecao.insertOne({ nome: "João", idade: 25 });
    console.log("✅ Documento inserido!");

    // Buscar documentos
    const usuarios = await colecao.find().toArray();
    console.log("👀 Usuários encontrados:", usuarios);
  } catch (erro) {
    console.error("❌ Erro ao conectar:", erro);
  } finally {
    await client.close();
  }
}

conectar();
