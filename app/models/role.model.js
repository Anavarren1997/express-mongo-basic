module.exports = (mongoose) => {
    const Role = mongoose.model(
      "roles",
      mongoose.Schema(
        {
          name: String
        },
      )
    );
    return Role;
  };