import React from 'react';
import { Contact } from '../types';
import { 
  Building2, 
  Mail, 
  Phone, 
  Linkedin, 
  Twitter, 
  Github, 
  Star, 
  StarOff,
  Briefcase,
  Edit2,
  Calendar,
  Cake,
  Award
} from 'lucide-react';

interface ContactCardProps {
  contact: Contact;
  onToggleFavorite: (id: string) => void;
  onEdit: (contact: Contact) => void;
}

export function ContactCard({ contact, onToggleFavorite, onEdit }: ContactCardProps) {
  const calculateAge = (birthDate: string): number => {
    const today = new Date();
    const birth = new Date(birthDate);
    let age = today.getFullYear() - birth.getFullYear();
    const monthDiff = today.getMonth() - birth.getMonth();
    
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birth.getDate())) {
      age--;
    }
    
    return age;
  };

  const formatDate = (dateString: string): string => {
    return new Date(dateString).toLocaleDateString('en-US', {
      month: 'long',
      day: 'numeric',
      year: 'numeric'
    });
  };

  const getDateIcon = (type: string) => {
    switch (type) {
      case 'birthday':
        return <Cake className="w-4 h-4 mr-2" />;
      case 'anniversary':
        return <Award className="w-4 h-4 mr-2" />;
      default:
        return <Calendar className="w-4 h-4 mr-2" />;
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <div className="p-6">
        <div className="flex items-start justify-between">
          <div className="flex items-center space-x-4">
            <img
              src={contact.avatar}
              alt={contact.name}
              className="w-16 h-16 rounded-full object-cover"
            />
            <div>
              <h3 className="text-xl font-semibold text-gray-900">{contact.name}</h3>
              <div className="flex items-center text-gray-600 mt-1">
                <Briefcase className="w-4 h-4 mr-1" />
                <span>{contact.role}</span>
              </div>
              <div className="flex items-center text-gray-600">
                <Building2 className="w-4 h-4 mr-1" />
                <span>{contact.company}</span>
              </div>
            </div>
          </div>
          <div className="flex space-x-2">
            <button
              onClick={() => onEdit(contact)}
              className="text-gray-500 hover:text-gray-700 transition-colors"
              title="Edit contact"
            >
              <Edit2 className="w-5 h-5" />
            </button>
            <button
              onClick={() => onToggleFavorite(contact.id)}
              className="text-yellow-500 hover:text-yellow-600 transition-colors"
              title={contact.favorite ? "Remove from favorites" : "Add to favorites"}
            >
              {contact.favorite ? (
                <Star className="w-5 h-5 fill-current" />
              ) : (
                <StarOff className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>

        <div className="mt-4 space-y-2">
          <div className="flex items-center text-gray-600">
            <Mail className="w-4 h-4 mr-2" />
            <a href={`mailto:${contact.email}`} className="hover:text-blue-600">
              {contact.email}
            </a>
          </div>
          <div className="flex items-center text-gray-600">
            <Phone className="w-4 h-4 mr-2" />
            <a href={`tel:${contact.phone}`} className="hover:text-blue-600">
              {contact.phone}
            </a>
          </div>
        </div>

        {contact.specialDates.length > 0 && (
          <div className="mt-4 space-y-2">
            <h4 className="text-sm font-medium text-gray-700 flex items-center">
              <Calendar className="w-4 h-4 mr-1" />
              Special Dates
            </h4>
            <div className="space-y-2">
              {contact.specialDates.map((date) => (
                <div
                  key={date.id}
                  className="text-sm text-gray-600 flex items-center bg-gray-50 rounded-lg p-2"
                >
                  {getDateIcon(date.type)}
                  <div>
                    <span className="capitalize font-medium">{date.type}</span>
                    <span className="mx-1">·</span>
                    <span>{formatDate(date.date)}</span>
                    {date.type === 'birthday' && (
                      <span className="ml-1 text-blue-600">
                        ({calculateAge(date.date)} years old)
                      </span>
                    )}
                    {date.description && (
                      <span className="block text-gray-500 mt-0.5">{date.description}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="mt-4 flex space-x-3">
          {contact.social.linkedin && (
            <a
              href={`https://linkedin.com/in/${contact.social.linkedin}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-blue-600"
            >
              <Linkedin className="w-5 h-5" />
            </a>
          )}
          {contact.social.twitter && (
            <a
              href={`https://twitter.com/${contact.social.twitter}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-blue-500"
            >
              <Twitter className="w-5 h-5" />
            </a>
          )}
          {contact.social.github && (
            <a
              href={`https://github.com/${contact.social.github}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-900"
            >
              <Github className="w-5 h-5" />
            </a>
          )}
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {contact.tags.map((tag) => (
            <span
              key={tag}
              className="px-2 py-1 bg-blue-100 text-blue-800 text-sm rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>

        {contact.notes && (
          <p className="mt-4 text-gray-600 text-sm border-t pt-4">
            {contact.notes}
          </p>
        )}
      </div>
    </div>
  );
}