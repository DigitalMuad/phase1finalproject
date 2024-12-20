# Reach & Rise ICT Solutions E-commerce Website

A responsive e-commerce website for Reach & Rise ICT Solutions, specializing in electronic gadgets in Nairobi. Built with HTML, CSS, and JavaScript.

## Features

- **Product Catalog**: Display of electronic products fetched from an API
- **Smart Caching**: Improved load times with local storage caching
- **Shopping Cart**:
  - Add/remove products
  - Persistent cart data across page reloads
  - Scrollable cart interface
  - Real-time total calculation
- **Price Filter**: Filter products by maximum price
- **Dark/Light Theme**: Toggle between dark and light modes
- **Responsive Design**: Works on all device sizes
- **Currency**: All prices displayed in KES (Kenyan Shillings)

## Setup

1. Clone the repository:
```bash
git clone [your-repository-url]
```

2. Open the project:
```bash
cd reach-and-rise-ict
```

3. Open `index.html` in your web browser or use a local server:
```bash
# Using Python 3
python -m http.server 8000

# Using Node.js
npx serve
```

## Project Structure

```
├── index.html          # Main HTML file
├── styles.css          # Styling
├── app.js             # JavaScript functionality
└── README.md          # Project documentation
```

## Usage

- Browse products in the main grid
- Use the price slider to filter products by maximum price
- Click "Add to Cart" to add products to your shopping cart
- Click the cart icon to view your cart
- Toggle between light and dark themes using the theme button
- View contact information in the footer

## Business Information

- **Location**: Jamia Mall, Shop No G7, Nairobi, Kenya
- **Operating Hours**: Monday - Saturday, 9:00 AM - 6:00 PM
- **Contact**:
  - Email: info@reachandrise.co.ke
  - Phone: +254 712 345 678

## Technical Details

- Products are fetched from the FakeStore API
- Cart data persists using localStorage
- Theme preference is saved in localStorage
- Exchange rate: 1 USD = 145 KES

## Browser Support

The website is compatible with:
- Google Chrome (latest)
- Mozilla Firefox (latest)
- Safari (latest)
- Microsoft Edge (latest)

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.