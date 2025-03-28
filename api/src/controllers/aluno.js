const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const read = async (req, res) => {
    const aluno = await prisma.aluno.findMany();
    return res.json(aluno)
}

const create = async (req, res) => {
    try {
        const aluno = await prisma.aluno.create({
            data: req.body
        });
        return res.json(aluno);
    } catch (error) {
        console.error('Erro ao criar aluno:', error);
        return res.status(500).json({ error: 'Erro ao criar aluno' });
    }
}

const update = async (req, res) => {
    const data = req.body;
    let aluno = await prisma.aluno.update({
        data: data,
        where: {
            ra: req.body.ra 
        }
    })
    return res.status(202).json(aluno).end()
}

const del = async (req, res) => {
    const aluno = await prisma.aluno.delete({
        where: {
            ra: req.params.ra 
        }
    });
    return res.status(204).json(aluno).end()
}

module.exports = {
    read,
    create,
    update,
    del
}