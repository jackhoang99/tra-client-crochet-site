/*
  # Insert sample projects for Yuto's portfolio

  1. Sample Data
    - Insert sample crochet projects with realistic data
    - Include various categories and difficulty levels
    - Add proper image URLs and project details
*/

INSERT INTO projects (
  title,
  category,
  description,
  difficulty,
  time_spent,
  completed_date,
  techniques,
  yarn_details,
  images,
  thumbnail
) VALUES 
(
  'Kawaii Penguin Family',
  'amigurumi',
  'An adorable family of penguins made with soft cotton yarn. Each penguin has its own personality with different colored scarves and expressions. This project taught me a lot about color changes and creating consistent shapes.',
  'Intermediate',
  '12 hours',
  'March 2024',
  ARRAY['Single crochet', 'Increasing', 'Decreasing', 'Color changes', 'Embroidery'],
  'Cotton DK weight in black, white, orange, and various colors for accessories. Polyester fiberfill stuffing.',
  ARRAY[
    'https://images.pexels.com/photos/6474557/pexels-photo-6474557.jpeg?auto=compress&cs=tinysrgb&w=800',
    'https://images.pexels.com/photos/6474558/pexels-photo-6474558.jpeg?auto=compress&cs=tinysrgb&w=800',
    'https://images.pexels.com/photos/6474569/pexels-photo-6474569.jpeg?auto=compress&cs=tinysrgb&w=800'
  ],
  'https://images.pexels.com/photos/6474557/pexels-photo-6474557.jpeg?auto=compress&cs=tinysrgb&w=400'
),
(
  'Rainbow Granny Square Blanket',
  'home',
  'A vibrant throw blanket made from 64 granny squares in rainbow colors. Perfect for adding a pop of color to any room. This was my first large project and taught me patience and consistency.',
  'Beginner',
  '25 hours',
  'February 2024',
  ARRAY['Granny squares', 'Joining', 'Border work', 'Color transitions'],
  'Acrylic worsted weight in 8 rainbow colors: red, orange, yellow, green, blue, indigo, violet, and white for borders.',
  ARRAY[
    'https://images.pexels.com/photos/7188004/pexels-photo-7188004.jpeg?auto=compress&cs=tinysrgb&w=800',
    'https://images.pexels.com/photos/7188067/pexels-photo-7188067.jpeg?auto=compress&cs=tinysrgb&w=800'
  ],
  'https://images.pexels.com/photos/7188004/pexels-photo-7188004.jpeg?auto=compress&cs=tinysrgb&w=400'
),
(
  'Cute Cat Tote Bag',
  'accessories',
  'A functional and adorable tote bag featuring a cat face design. Sturdy enough for everyday use with reinforced handles. The cat face is created using surface crochet techniques.',
  'Intermediate',
  '8 hours',
  'January 2024',
  ARRAY['Single crochet', 'Surface crochet', 'Handle construction', 'Tapestry crochet'],
  'Cotton blend worsted weight in cream and brown. Interfacing for structure.',
  ARRAY[
    'https://images.pexels.com/photos/6474569/pexels-photo-6474569.jpeg?auto=compress&cs=tinysrgb&w=800',
    'https://images.pexels.com/photos/6474557/pexels-photo-6474557.jpeg?auto=compress&cs=tinysrgb&w=800'
  ],
  'https://images.pexels.com/photos/6474569/pexels-photo-6474569.jpeg?auto=compress&cs=tinysrgb&w=400'
),
(
  'Succulent Garden Set',
  'home',
  'A collection of realistic-looking crocheted succulents in handmade pots. No watering required! Each succulent uses different techniques to achieve unique textures and shapes.',
  'Advanced',
  '15 hours',
  'December 2023',
  ARRAY['3D shaping', 'Texture work', 'Multiple yarn weights', 'Wire armature'],
  'Various weights in greens, browns, and terra cotta. Floral wire for structure.',
  ARRAY[
    'https://images.pexels.com/photos/7188067/pexels-photo-7188067.jpeg?auto=compress&cs=tinysrgb&w=800',
    'https://images.pexels.com/photos/7188004/pexels-photo-7188004.jpeg?auto=compress&cs=tinysrgb&w=800'
  ],
  'https://images.pexels.com/photos/7188067/pexels-photo-7188067.jpeg?auto=compress&cs=tinysrgb&w=400'
),
(
  'Cozy Cardigan',
  'clothing',
  'A warm and stylish oversized cardigan perfect for fall weather. Features a relaxed fit and cozy pockets. This was my first wearable garment and a big milestone in my crochet journey.',
  'Advanced',
  '40 hours',
  'November 2023',
  ARRAY['Garment construction', 'Shaping', 'Buttonholes', 'Seaming', 'Gauge swatching'],
  'Wool blend chunky weight in sage green. Wooden buttons for closure.',
  ARRAY[
    'https://images.pexels.com/photos/7188066/pexels-photo-7188066.jpeg?auto=compress&cs=tinysrgb&w=800'
  ],
  'https://images.pexels.com/photos/7188066/pexels-photo-7188066.jpeg?auto=compress&cs=tinysrgb&w=400'
),
(
  'Baby Unicorn Mobile',
  'home',
  'A magical nursery mobile featuring pastel unicorns and clouds. Made as a gift for my sister''s new baby. Each element is carefully weighted and balanced for gentle movement.',
  'Intermediate',
  '10 hours',
  'October 2023',
  ARRAY['Amigurumi', 'Assembly', 'Mobile construction', 'Color gradients'],
  'Baby yarn in pastels - pink, purple, yellow, white. Wooden embroidery hoop for frame.',
  ARRAY[
    'https://images.pexels.com/photos/6474558/pexels-photo-6474558.jpeg?auto=compress&cs=tinysrgb&w=800',
    'https://images.pexels.com/photos/6474557/pexels-photo-6474557.jpeg?auto=compress&cs=tinysrgb&w=800'
  ],
  'https://images.pexels.com/photos/6474558/pexels-photo-6474558.jpeg?auto=compress&cs=tinysrgb&w=400'
);