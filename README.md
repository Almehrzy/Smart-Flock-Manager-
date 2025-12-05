# Smart Flock Manager 3.0

نظام إدارة شامل للثروة الحيوانية (الأغنام والماعز) مع ميزات ذكية وتحليلات متقدمة.

**A comprehensive livestock management system for sheep and goats with smart features and advanced analytics.**

---

## 🎯 الميزات الرئيسية | Key Features

- 🐑 إدارة الحيوانات والقطعان | Livestock & Flock Management
- 🏥 تتبع صحة الحيوانات | Health Monitoring
- 👶 إدارة التكاثر والنسب | Breeding Management
- 📊 تحليلات ذكية مع AI | AI-Powered Analytics
- 💰 إدارة مالية شاملة | Financial Management
- 📅 جدولة العمليات | Calendar & Scheduling
- 📈 تقارير وإحصائيات | Reports & Statistics
- 🌍 دعم عربي وإنجليزي | Arabic & English Support

---

## 📋 المتطلبات | Prerequisites

- Node.js 16+
- npm أو yarn

---

## 🚀 البدء السريع | Quick Start

### 1. استنساخ المشروع | Clone the Repository
```bash
git clone https://github.com/your-username/smart-flock-manager-3.0.git
cd smart-flock-manager-3.0
```

### 2. تثبيت المتطلبات | Install Dependencies
```bash
npm install
```

### 3. إعداد متغيرات البيئة | Configure Environment Variables
```bash
# Copy the example file
cp .env.example .env.local
```

ثم قم بتعديل `.env.local` وأضف مفاتيحك:

```env
# احصل على المفتاح من: https://ai.google.dev/
GEMINI_API_KEY=your_gemini_api_key_here

# احصل على البيانات من: https://app.supabase.com/
SUPABASE_URL=your_supabase_url_here
SUPABASE_KEY=your_supabase_anon_key_here
```

### 4. تشغيل التطبيق | Run the Application
```bash
npm run dev
```

التطبيق سيعمل على `http://localhost:3000`

---

## 🔨 الأوامر المتاحة | Available Commands

```bash
npm run dev      # تطوير محلي | Development server
npm run build    # بناء النسخة الإنتاجية | Production build
npm run preview  # معاينة النسخة المبنية | Preview production build
```

---

## 🛠️ المتطلبات التقنية | Tech Stack

- **React 19** - واجهة المستخدم
- **TypeScript** - لغة البرمجة
- **Vite** - بناء التطبيق
- **Tailwind CSS** - التنسيق
- **Supabase** - قاعدة البيانات
- **Google Gemini AI** - التحليلات الذكية
- **React Router** - التوجيه بين الصفحات
- **Recharts** - الرسوم البيانية

---

## 📁 بنية المشروع | Project Structure

```
src/
├── pages/          # صفحات التطبيق
├── components/     # مكونات معاد استخدامها
├── context/        # إدارة الحالة
├── lib/            # مكتبات وخدمات
├── types.ts        # تعريفات TypeScript
└── mockData.ts     # بيانات تجريبية
```

---

## 🔐 الأمان | Security

- **لا تشارك `.env.local`** عبر Git
- استخدم متغيرات البيئة في الإنتاج
- تحديث المفاتيح بانتظام
- استخدم Supabase Row Level Security (RLS)

---

## 📝 الترخيص | License

MIT License - انظر LICENSE file للتفاصيل

---

## 👥 المساهمة | Contributing

نرحب بالمساهمات! يرجى:
1. عمل Fork للمشروع
2. إنشاء فرع جديد لميزتك
3. الالتزام بالتغييرات
4. فتح Pull Request

---

## 📧 التواصل | Support

للأسئلة والدعم، يرجى فتح Issue على GitHub
