import '../styles/setting.css';
import '../styles/App.css';
import Header from '@/components/Header/Header';
import PageTransition from '@/components/PageTransition';

export const metadata = {
    title: 'Mon Portfolio',
    description: "Développeur web et web mobile pour restaurateur. Création de site internet, application mobile, référencement naturel et publicité en ligne.",
    manifest: '/manifest.json',
    icons: {
        icon: '/favicon.ico',
    },
};

export const viewport = {
    width: 'device-width',
    initialScale: 1,
    themeColor: '#000000',
};

export default function RootLayout({ children }) {
    return (
        <html lang="fr-FR">
            <head>
                <link href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css" rel="stylesheet" />
                <link rel="stylesheet" href="https://unicons.iconscout.com/release/v4.0.8/css/line.css" />
            </head>
            <body className="App">
                <Header />
                <PageTransition>{children}</PageTransition>
            </body>
        </html>
    )
}
