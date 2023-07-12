const router = require('express').Router();

const {
  getAllThoughts,
  getThoughtById,
  createThought,
  updateThought,
  deleteThought,
  addReaction,
  deleteReaction,
} = require('../../controllers/thoughtController');

// router for all thoughts
router
  .route('/')
  .get(getAllThoughts)
  .post(createThought);

// router for singular thought
router
  .route('/:thoughtId')
  .get(getThoughtById)
  .put(updateThought)
  .delete(deleteThought);

// router for reactions
router
  .route('/:thoughtId/reactions')
  .post(addReaction);

// router for singular reaction
router
  .route('/:thoughtId/reactions/:reactionId')
  .delete(deleteReaction);

module.exports = router;
