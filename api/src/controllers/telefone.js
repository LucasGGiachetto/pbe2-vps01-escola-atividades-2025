const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const read = async (req, res) => {
    const telefone = await prisma.telefone.findMany();
    return res.json(telefone)
}

const create = async (req, res) => {
    const data = req.body;
    const telefone = await prisma.telefone.create({
        data: data
    });
    return res.status(201).json(telefone).end()
}

const update = async (req, res) => {
    const data = req.body;
    let telefone = await prisma.telefone.update({
        data: data,
        where: {
            id: parseInt(req.body.id)
        }
    })
    return res.status(202).json(telefone).end()
}

const del = async (req, res) => {
    const id = parseInt(req.params.id);
    const telefone = await prisma.telefone.delete({
        where: {
            id: parseInt(req.params.id)
        }
    });
    return res.status(204).json(telefone).end()
}

module.exports = {
    read,
    create,
    update,
    del
}