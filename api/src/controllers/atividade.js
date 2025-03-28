const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const read = async (req, res) => {
    const atividade = await prisma.atividade.findMany();
    return res.json(atividade)
}

const create = async (req, res) => {
    const data = req.body;
    const atividade = await prisma.atividade.create({
        data: data
    });
    return res.status(201).json(atividade).end()
}

const update = async (req, res) => {
    const { id } = req.params; 
    const data = req.body;

    try {
        const atividade = await prisma.atividade.update({
            where: { id: Number(id) }, 
            data: data
        });
        return res.status(200).json(atividade);
    } catch (error) {
        console.error('Erro ao atualizar atividade:', error.message);
        return res.status(500).json({ error: 'Erro ao atualizar atividade', details: error.message });
    }
}

const del = async (req, res) => {
    const id = parseInt(req.params.id);
    const atividade = await prisma.atividade.delete({
        where: {
            id: parseInt(req.params.id)
        }
    });
    return res.status(204).json(atividade).end()
}

module.exports = {
    read,
    create,
    update,
    del
}