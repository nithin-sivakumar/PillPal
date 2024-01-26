import bcrypt from "bcryptjs";

console.log(
  await bcrypt.compare(
    "123",
    "$2a$10$ZnMM531DDygRA385WpiksuWpzQUlErWYEv9IVmUVtYWL1sV7l1dt6"
  )
);
