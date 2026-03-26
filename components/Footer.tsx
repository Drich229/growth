
import {FaFacebook, FaInstagram} from 'react-icons/fa';
import {FaLinkedin, FaTwitter} from 'react-icons/fa';

const Facebook = FaFacebook;
const Instagram = FaInstagram;
const Linkedin = FaLinkedin;
const Twitter = FaTwitter;
const Footer = () => {
  return (
    <footer className="mt-[200px] bg-[(--color-bg)] text-[(--color-text)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo */}
          <div>
            <h3 className="text-2xl font-bold text-[(--color-text)]">GROWTH</h3>

             {/* Réseaux Sociaux */}
        <div className="mt-8 flex space-x-4">
          <a href="#" className="text-[(--color-text-light)] hover:text-[(--color-primary)]">
            <Facebook className="w-5 h-5" />
          </a>
          <a href="#" className="text-[(--color-text-light)] hover:text-[(--color-primary)]">
            <Instagram className="w-5 h-5" />
          </a>
          <a href="#" className="text-[(--color-text-light)] hover:text-[(--color-primary)]">
            <Linkedin className="w-5 h-5" />
          </a>
          <a href="#" className="text-[(--color-text-light)] hover:text-[(--color-primary)]">
            <Twitter className="w-5 h-5" />
          </a>
        </div>
          </div>

          {/* Liens utiles */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-[(--color-text)]">Liens utiles</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-[(--color-text-light)] hover:text-[(--color-primary)]">
                  Qui sommes nous
                </a>
              </li>
              <li>
                <a href="#" className="text-[(--color-text-light)] hover:text-[(--color-primary)]">
                  Nos offres
                </a>
              </li>
              <li>
                <a href="#" className="text-[(--color-text-light)] hover:text-[(--color-primary)]">
                  Programme d'affiliation
                </a>
              </li>
            </ul>
          </div>

          {/* Ressources */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-[(--color-text)]">Ressources</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-[(--color-text-light)] hover:text-[(--color-primary)]">
                  Centre d'aide
                </a>
              </li>
              <li>
                <a href="#" className="text-[(--color-text-light)] hover:text-[(--color-primary)]">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Légal */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-[(--color-text)]">Légal</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-[(--color-text-light)] hover:text-[(--color-primary)]">
                  Politique de confidentialité
                </a>
              </li>
              <li>
                <a href="#" className="text-[(--color-text-light)] hover:text-[(--color-primary)]">
                  Terme et service
                </a>
              </li>
            </ul>
          </div>
        </div>

       

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-[(--color-border)] text-center text-[(--color-text-light)]">
          <p>© 2026 - Growth. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;