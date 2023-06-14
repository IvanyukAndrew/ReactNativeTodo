import TodoModel from "../models/Todo.js";

export const create = async (req, res) => {
  try {
    const doc = new TodoModel({
      title: req.body.title,
      user: req.userId,
    });

    const todo = await doc.save();

    res.json(todo);
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: "Не вдалося создати todo",
    });
  }
};

export const getAll = async (req, res) => {
  try {
    const userId = req.params.id;
    console.log(userId);
    const todos = await TodoModel.find({ user: userId })
      .populate("user")
      .sort({ createdAt: -1 })
      .exec();

    res.json(todos);
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: "Не вдалося получити todo",
    });
  }
};

export const remove = async (req, res) => {
  const todoId = req.params.id;

  await TodoModel.findOneAndDelete({
    _id: todoId,
  })
    .then((doc) => {
      if (!doc) {
        return res.status(500).json({
          message: "Виникла помилка при видалені",
        });
      }

      res.json({
        success: true,
      });
    })
    .catch((err) =>
      res.status(500).json({
        message: "Не вдалося видалити todo",
      })
    );
};
