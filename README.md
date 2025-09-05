# Converso - Real-time AI Teaching Platform

Converso is a modern SaaS application that provides real-time AI-powered teaching companions for various subjects. Students can interact with AI tutors through voice conversations, making learning more engaging and interactive.

## 🚀 Features

- **AI Teaching Companions**: Interactive AI tutors for multiple subjects including Math, Science, Language, Coding, History, and Economics
- **Voice Interaction**: Real-time voice conversations powered by VAPI (Voice AI Platform)
- **Subject-based Learning**: Organized learning experiences by academic subjects
- **Session History**: Track and revisit previous learning sessions
- **User Authentication**: Secure user management with Clerk
- **Responsive Design**: Modern UI built with Next.js and Tailwind CSS
- **Real-time Database**: Supabase integration for data persistence

## 🛠️ Tech Stack

- **Frontend**: Next.js 14, React, TypeScript
- **Styling**: Tailwind CSS, Bricolage Grotesque font
- **Authentication**: Clerk
- **Database**: Supabase
- **Voice AI**: VAPI (Voice AI Platform)
- **Monitoring**: Sentry
- **Deployment**: Vercel (configured)

## 📁 Project Structure

```
saas_app/
├── app/                    # Next.js app directory
│   ├── companions/         # Companion pages and interactions
│   ├── my-journey/        # User learning journey
│   ├── subscription/      # Subscription management
│   └── sign-in/          # Authentication pages
├── components/           # Reusable UI components
│   ├── ui/               # Base UI components
│   ├── CompanionCard.tsx # Companion display component
│   ├── CompanionForm.tsx # Companion creation form
│   └── Navbar.tsx        # Navigation component
├── lib/                  # Utility functions and actions
│   ├── actions/          # Server actions
│   ├── supabase.ts       # Database client
│   └── vapi.sdk.ts       # Voice AI integration
├── types/                # TypeScript type definitions
├── constants/            # Application constants
└── public/               # Static assets
```

## 🎯 Available Subjects

- **Mathematics**: Algebra, Calculus, Statistics
- **Science**: Physics, Chemistry, Biology
- **Language**: English Literature, Grammar, Vocabulary
- **Coding**: Programming fundamentals, Algorithms
- **History**: World Wars, Historical events
- **Economics**: Supply & Demand, Market principles

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn
- Supabase account
- Clerk account
- VAPI account

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd saas_app
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Environment Setup**
   Create a `.env.local` file in the root directory:
   ```env
   # Supabase
   NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
   
   # Clerk Authentication
   NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
   CLERK_SECRET_KEY=your_clerk_secret_key
   
   # VAPI Voice AI
   VAPI_API_KEY=your_vapi_api_key
   
   # Sentry (Optional)
   SENTRY_DSN=your_sentry_dsn
   ```

4. **Database Setup**
   - Create tables in Supabase:
     - `companions` - Store AI teaching companions
     - `session_history` - Track user learning sessions
     - Set up Row Level Security (RLS) policies

5. **Run the development server**
   ```bash
   npm run dev
   ```

6. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📱 Usage

### Creating a Companion
1. Navigate to `/companions/new`
2. Fill in companion details:
   - Name and topic
   - Subject selection
   - Voice preference (male/female, casual/formal)
   - Session duration
3. Save to create your AI teaching companion

### Starting a Learning Session
1. Browse available companions on the homepage
2. Click on a companion to start a session
3. Use voice interaction to learn and ask questions
4. Sessions are automatically tracked in your history

### Managing Your Journey
- View your learning progress in `/my-journey`
- Access subscription features in `/subscription`
- Track recent sessions on the homepage

## 🔧 Configuration

### Voice Settings
The application supports multiple voice options:
- **Male voices**: Casual and formal tones
- **Female voices**: Casual and formal tones
- Voice IDs are configured in `constants/index.ts`

### Subject Colors
Each subject has a unique color scheme defined in `constants/index.ts`:
- Science: Purple (#E5D0FF)
- Math: Yellow (#FFDA6E)
- Language: Blue (#BDE7FF)
- Coding: Pink (#FFC8E4)
- History: Orange (#FFECC8)
- Economics: Green (#C8FFDF)

## 🚀 Deployment

The application is configured for deployment on Vercel:

1. **Connect your repository** to Vercel
2. **Set environment variables** in Vercel dashboard
3. **Deploy** - Vercel will automatically build and deploy

### Sentry Integration
Error monitoring is configured with Sentry:
- Automatic error tracking
- Performance monitoring
- Source map uploads for better debugging

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🆘 Support

For support and questions:
- Create an issue in the repository
- Check the documentation for each service:
  - [Next.js Documentation](https://nextjs.org/docs)
  - [Supabase Documentation](https://supabase.com/docs)
  - [Clerk Documentation](https://clerk.com/docs)
  - [VAPI Documentation](https://docs.vapi.ai/)

## 🔮 Future Enhancements

- [ ] Advanced analytics and progress tracking
- [ ] Multi-language support
- [ ] Mobile app development
- [ ] Integration with learning management systems
- [ ] Advanced AI tutoring features
- [ ] Collaborative learning sessions

---

Built with ❤️ using Next.js, Supabase, and VAPI