const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const create = async (req, res) => {
    try {
      const { pedidoId, pizzaId, quantidade, valor, subtotal } = req.body;
  
      const itemExistente = await prisma.contem.findUnique({
        where: {
          pedidoId_pizzaId: {
            pedidoId: pedidoId,
            pizzaId: pizzaId
          }
        }
      });
  
      if (itemExistente) {
        return res.status(400).json({ error: 'Este item já foi adicionado ao pedido.' });
      }
      const item = await prisma.contem.create({
        data: {
          pedidoId: pedidoId,
          pizzaId: pizzaId,
          quantidade: quantidade,
          valor: valor,
          subtotal: subtotal,
        }
      });
  
      return res.status(201).json(item);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: 'Erro ao adicionar item ao pedido.' });
    }
  };

const read = async (req, res) => {
    const itens = await prisma.contem.findMany();
    return res.json(itens);
}

const readOne = async (req, res) => {
    try {
        const contem = await prisma.contem.findUnique({
            select: {
                id: true,
                data: true,
                hora: true,
                valor: true,
                clienteId: true
            },
            where: {
                id: parseInt(req.params.id)
            }
        });
        return res.json(contem);
    } catch (error) {
        return res.status(400).json({ error: error.message });
    }
}

const update = async (req, res) => {
    try {
        const contem = await prisma.contem.update({
            where: {
                id: parseInt(req.params.id)
            },
            data: req.body
        });
        return res.status(202).json(contem);
    } catch (error) {
        return res.status(400).json({ error: error.message });
    }
}

const remove = async (req, res) => {
    try {
        await prisma.contem.delete({
            where: {
                id: parseInt(req.params.id)
            }
        });
        return res.status(204).send();
    } catch (error) {
        return res.status(404).json({ error: error.message });
    }
}

module.exports = { create, read, readOne, update, remove };