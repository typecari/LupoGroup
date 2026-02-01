# Lupo Consulting Website

A modern, professional website for Lupo Consulting built with clean HTML, CSS, and JavaScript.

## 🎨 Features

- **Responsive Design** - Works perfectly on desktop, tablet, and mobile devices
- **Modern UI/UX** - Clean, professional design with smooth animations
- **Brand-Compliant** - Uses official Lupo Consulting colors and styling
- **Contact Form** - Fully functional lead capture form
- **SEO-Friendly** - Semantic HTML with proper meta tags
- **Fast Loading** - Optimized for performance
- **Accessible** - WCAG compliant with keyboard navigation

## 📋 File Structure

```
lupo-consulting-website/
├── index.html              # Main HTML file
├── styles.css              # All styles and responsive design
├── script.js               # Interactive functionality
├── README.md               # This file
└── images/                 # Image assets
    ├── Lupo_Consulting_Legacy_Blue.png
    ├── Marketing__Brand_Consulting.png
    ├── GTM_Operations_Consulting.png
    ├── SaaS_Legal__Contract_Consulting.png
    └── Sales_Org__Revenue_Consulting.png
```

## 🚀 Quick Start

### Option 1: Open Locally
1. Download all files to a folder
2. Open `index.html` in your web browser
3. That's it! The website is ready to use

### Option 2: Deploy to Web Host

**GitHub Pages (Free):**
1. Create a GitHub repository
2. Upload all files
3. Go to Settings > Pages
4. Select main branch as source
5. Your site will be live at `https://yourusername.github.io/repo-name`

**Netlify (Free):**
1. Sign up at netlify.com
2. Drag and drop the entire folder
3. Your site goes live instantly with a custom URL

**Traditional Web Hosting:**
1. Upload all files via FTP to your web host
2. Ensure all files maintain their structure
3. Access via your domain name

## 🎨 Brand Colors

- **Primary Color (Legacy Blue):** #00679A
- **Secondary Color (Terra Clay):** #C04527
- **Space Black:** #231F20
- **Eclipse Gray:** #656768

## 📝 Customization Guide

### Updating Contact Information
Edit in `index.html`:
- **Email:** Line ~230 and footer
- **Phone:** Line ~235 and footer
- **LinkedIn:** Footer section

### Adding Google Analytics
1. Get your Google Analytics tracking ID
2. Add before `</head>` in index.html:
```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

### Setting Up Contact Form Backend

**Option 1: EmailJS (Recommended - Free)**
1. Sign up at https://www.emailjs.com/
2. Create an email service
3. Create an email template
4. Add this to `index.html` before `</body>`:
```html
<script src="https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js"></script>
```
5. Uncomment EmailJS code in `script.js`
6. Add your Public Key, Service ID, and Template ID

**Option 2: Formspree (Simple)**
1. Sign up at https://formspree.io/
2. Create a form and get your endpoint
3. Update form action in `index.html`:
```html
<form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
```

**Option 3: Custom Backend**
- Create your own API endpoint
- Update the fetch URL in `script.js` (line ~101)

## 📱 Responsive Breakpoints

- **Desktop:** 1200px and above
- **Tablet:** 768px - 1199px
- **Mobile:** Below 768px

## 🔧 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## ⚡ Performance Optimization Tips

1. **Optimize Images:**
   - Use compressed PNG/WebP formats
   - Recommended size: < 200KB per image

2. **Enable Caching:**
   - Add cache headers if using a web server

3. **Use CDN:**
   - Host images on a CDN for faster loading

4. **Minify Code (Production):**
   - Use tools like: 
     - CSS: cssnano
     - JS: Terser
     - HTML: html-minifier

## 🎯 SEO Optimization

Current SEO features:
- Semantic HTML5 structure
- Meta description tag
- Proper heading hierarchy (H1 → H2 → H3)
- Alt text for images
- Mobile-responsive design

**To improve further:**
1. Add more meta tags (Open Graph, Twitter Cards)
2. Create sitemap.xml
3. Add robots.txt
4. Implement Schema.org markup
5. Add Google Search Console

## 📞 Support & Contact

For questions about the website:
- **Email:** info.lupogroup@gmail.com
- **Phone:** +1 (786) 223-1375

## 📄 License

© 2025 Lupo Consulting. Part of Lupo Group.
All rights reserved.

## 🐺 About Lupo Consulting

Lupo Consulting brings nearly 30 years of combined experience to help SaaS and software companies optimize operations, accelerate revenue, and build sustainable growth.

---

**Need help deploying or customizing? Contact us!**
