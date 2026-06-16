# Vandana Crafts

E-commerce website for a handmade Sagwan/Teak wood clock brand — built with Next.js, Tailwind CSS, and Supabase.

## 🌐 Live Site
[vandanacrafts.com](https://vandanacrafts.com)

## 📖 About
Vandana Crafts is a production-ready e-commerce website built for a handmade wooden clock artisan. The site showcases wall clocks, table clocks, and custom-order pieces crafted from premium Sagwan (Teak) wood.

Ordering is done via WhatsApp — no payment gateway needed.

## ✨ Features
- Mobile-first single-scroll homepage with real product images
- Shop page with category filtering (wall clocks, table clocks)
- Product detail page with thumbnail gallery and quantity selector
- Custom order form with WhatsApp integration
- About page with happy customers photo section
- Floating WhatsApp button across all pages
- Manual product display ordering via database

## 🛠️ Tech Stack
| Layer | Technology |
|-------|-----------|
| Frontend | Next.js (App Router), Tailwind CSS v4 |
| Database | Supabase (PostgreSQL) |
| Storage | Supabase Storage |
| Deployment | Vercel |
| Ordering | WhatsApp API |

## 📁 Project Structure
vandana-crafts/

├── app/

│   ├── page.js          # Homepage

│   ├── shop/            # Shop page

│   ├── product/         # Product detail page

│   ├── custom-order/    # Custom order form

│   └── about/           # About page

├── components/          # Reusable components

└── public/              # Static assets

## ⚙️ Local Setup Guide

Follow these steps to run this project on your local machine.

### Prerequisites
Make sure you have these installed:
- [Node.js](https://nodejs.org/) (version 18 or above)
- [Git](https://git-scm.com/)
- A [Supabase](https://supabase.com/) account (free tier works)

### 1. Clone the Repository
```bash
git clone https://github.com/nitinoneview/vandana-crafts.git
cd vandana-crafts
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Set Up Supabase
- Go to [supabase.com](https://supabase.com/) and create a new project
- Create the following tables in the SQL Editor:

```sql
-- Products table
create table products (
  id uuid primary key,
  name text,
  price numeric,
  category text,
  description text,
  display_order int
);

-- Product images table
create table product_images (
  id uuid primary key default gen_random_uuid(),
  product_id uuid references products(id),
  image_url text,
  is_primary boolean default false,
  sort_order int
);
```

### 4. Configure Environment Variables
Create a `.env.local` file in the root folder:

NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url

NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key

> Get these values from your Supabase project → Settings → API

### 5. Run the Development Server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🚀 Deployment
This project is deployed on **Vercel**.

To deploy your own copy:
1. Push code to GitHub
2. Go to [vercel.com](https://vercel.com/) and import the repository
3. Add the same environment variables from `.env.local`
4. Click Deploy

## 📞 Contact
- Instagram: [@vandanacrafts](https://instagram.com/vandanacrafts)
- WhatsApp: +91 92192 65044
- Email: Craftsvandana@gmail.com


