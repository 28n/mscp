import { db } from 'src/lib/db'

export const comments = () => {
  return db.comment.findMany(
    {
      orderBy: {
        createdAt: 'desc',
      }
    }
  )
}

export const userComments = ({ userName }) => {
  return db.comment.findMany({
    where: {
      userName,
    },
    orderBy: {
      createdAt: 'desc',
    },
  })
}

export const comment = ({ id }) => {
  return db.comment.findUnique({
    where: { id },
  })
}

export const createComment = ({ input }) => {
  return db.comment.create({
    data: input,
  })
}

export const updateComment = ({ id, input }) => {
  return db.comment.update({
    data: input,
    where: { id },
  })
}

export const deleteComment = ({ id }) => {
  return db.comment.delete({
    where: { id },
  })
}
