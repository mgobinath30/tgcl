# Tiruppur Gastrocare & Laparoscopic Centre

A modern, responsive website for a gastroenterology clinic built with Next.js 14, TypeScript, and Tailwind CSS. Features include doctor authentication, appointment booking, awards showcase, and comprehensive security measures.

## 🚀 Features

### Core Functionality
- **Responsive Design**: Mobile-first approach with modern UI/UX
- **Doctor Authentication**: Firebase-based authentication for doctors
- **Appointment Booking**: Secure appointment booking system with validation
- **Doctor Dashboard**: Comprehensive dashboard for managing appointments and subscribers
- **Awards Showcase**: Interactive awards display with image slider and preview modal
- **Hospital Awards**: Dedicated section showcasing hospital achievements

### Security Features
- **Input Validation**: Comprehensive form validation and sanitization
- **XSS Prevention**: HTML sanitization and content security policies
- **Rate Limiting**: Protection against brute force attacks
- **HTTPS Enforcement**: Automatic HTTPS redirect in production
- **Security Headers**: Comprehensive security headers implementation

### Technical Features
- **TypeScript**: Full type safety throughout the application
- **Tailwind CSS**: Utility-first CSS framework for styling
- **Framer Motion**: Smooth animations and transitions
- **Radix UI**: Accessible component primitives
- **Firebase**: Authentication and database integration
- **Next.js 14**: Latest Next.js features including App Router

## 📋 Prerequisites

Before you begin, ensure you have the following installed:
- Node.js 18.0 or later
- npm or yarn package manager
- Firebase project (for authentication)

## 🛠️ Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd gastro-clinic-site-builder-main
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Set up environment variables**
   Create a `.env.local` file in the root directory:
   ```env
   # Firebase Configuration
   NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key_here
   NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_project_id.firebaseapp.com
   NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
   NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_project_id.appspot.com
   NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
   NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id
   ```

4. **Set up Firebase**
   - Create a new Firebase project at [Firebase Console](https://console.firebase.google.com/)
   - Enable Authentication and Firestore Database
   - Add your domain to authorized domains
   - Create doctor accounts with the following emails:
     - `dr.shenthil@tiruppurgastrocare.com`
     - `dr.priya@tiruppurgastrocare.com`
     - `dr.arun@tiruppurgastrocare.com`
   - Set password as `doctor123` for demo purposes

## 🚀 Getting Started

1. **Start the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

2. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
gastro-clinic-site-builder-main/
├── app/                          # Next.js App Router
│   ├── about/                    # About Us page
│   ├── blog/                     # Blog pages
│   ├── contact/                  # Contact page
│   ├── doctor-dashboard/         # Doctor dashboard (protected)
│   ├── doctors/                  # Doctors listing page
│   ├── services/                 # Services page
│   ├── globals.css               # Global styles
│   ├── layout.tsx                # Root layout
│   └── page.tsx                  # Home page
├── components/                   # Reusable components
│   ├── ui/                       # UI components (Radix UI)
│   ├── AppointmentModal.tsx      # Appointment booking modal
│   ├── DoctorsSection.tsx        # Doctors section with awards
│   ├── LoginModal.tsx            # Doctor login modal
│   └── ...                       # Other components
├── contexts/                     # React contexts
│   └── AuthContext.tsx           # Authentication context
├── hooks/                        # Custom React hooks
├── lib/                          # Utility libraries
│   ├── firebase.ts               # Firebase configuration
│   ├── security.ts               # Security utilities
│   └── utils.ts                  # General utilities
├── middleware.ts                 # Next.js middleware for security
├── public/                       # Static assets
└── ...                           # Configuration files
```

## 🔐 Authentication

### Doctor Login
- **Demo Credentials**:
  - Email: `dr.shenthil@tiruppurgastrocare.com`
  - Password: `doctor123`

### Access Control
- Only authenticated doctors can access the dashboard
- Automatic redirect to doctors page for unauthorized users
- Session management with Firebase Auth

## 🎨 Customization

### Styling
- Modify `tailwind.config.ts` for theme customization
- Update `app/globals.css` for global styles
- Component-specific styles use Tailwind classes

### Content
- Update doctor information in `components/DoctorsSection.tsx`
- Modify hospital awards in `app/about/page.tsx`
- Customize contact information throughout the app

### Firebase Configuration
- Update Firebase settings in `lib/firebase.ts`
- Modify authentication rules in Firebase Console
- Add new doctor emails to the authentication context

## 🔒 Security Features

### Input Validation
- Email format validation
- Phone number validation (Indian format)
- Name validation (letters and common characters only)
- Date and time format validation
- Message length limits

### XSS Prevention
- HTML sanitization for all user inputs
- Content Security Policy headers
- Input length restrictions

### Rate Limiting
- API route protection (100 requests/minute)
- Appointment booking protection (5 requests/5 minutes)
- IP-based rate limiting

### Security Headers
- Content Security Policy
- X-Frame-Options: DENY
- X-Content-Type-Options: nosniff
- X-XSS-Protection
- Referrer-Policy
- Permissions-Policy

## 📱 Responsive Design

The website is fully responsive and optimized for:
- **Mobile**: 320px and up
- **Tablet**: 768px and up
- **Desktop**: 1024px and up
- **Large Desktop**: 1280px and up

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Add environment variables in Vercel dashboard
4. Deploy automatically

### Other Platforms
1. Build the project: `npm run build`
2. Start production server: `npm start`
3. Configure your hosting platform accordingly

### Environment Variables for Production
Ensure all Firebase environment variables are set in your production environment.

## 🧪 Testing

### Manual Testing
1. **Authentication**: Test doctor login/logout
2. **Appointment Booking**: Test form validation and submission
3. **Responsive Design**: Test on different screen sizes
4. **Security**: Test input validation and rate limiting

### Browser Compatibility
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📊 Performance

### Optimization Features
- Next.js Image Optimization
- Code splitting and lazy loading
- Optimized bundle size
- Efficient re-rendering with React

### Lighthouse Scores
- Performance: 90+
- Accessibility: 95+
- Best Practices: 95+
- SEO: 90+

## 🐛 Troubleshooting

### Common Issues

1. **Firebase Authentication Not Working**
   - Check environment variables
   - Verify Firebase project configuration
   - Ensure authorized domains are set

2. **Build Errors**
   - Clear `.next` folder: `rm -rf .next`
   - Reinstall dependencies: `rm -rf node_modules && npm install`

3. **Styling Issues**
   - Check Tailwind CSS configuration
   - Verify class names are correct
   - Clear browser cache

### Debug Mode
Enable debug mode by setting `NODE_ENV=development` in your environment variables.

## 📝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Commit changes: `git commit -m 'Add feature'`
4. Push to branch: `git push origin feature-name`
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🆘 Support

For support and questions:
- Create an issue in the repository
- Contact the development team
- Check the documentation

## 🔄 Updates and Maintenance

### Regular Updates
- Keep dependencies updated
- Monitor security vulnerabilities
- Update Firebase rules as needed
- Review and update content regularly

### Backup Strategy
- Regular database backups
- Code repository backups
- Environment variable backups

## 📈 Future Enhancements

### Planned Features
- [ ] Patient portal
- [ ] Online payment integration
- [ ] Telemedicine features
- [ ] Multi-language support
- [ ] Advanced analytics
- [ ] Mobile app integration

### Technical Improvements
- [ ] Unit testing implementation
- [ ] E2E testing setup
- [ ] Performance monitoring
- [ ] Error tracking
- [ ] SEO optimization

---

**Built with ❤️ for better healthcare accessibility**