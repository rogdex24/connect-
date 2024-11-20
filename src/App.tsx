import React, { useState, useMemo } from 'react';
import { Search, Users } from 'lucide-react';
import { ContactCard } from './components/ContactCard';
import { EditContactModal } from './components/EditContactModal';
import { initialContacts } from './data';
import type { Contact } from './types';

function App() {
  const [contacts, setContacts] = useState<Contact[]>(initialContacts);
  const [search, setSearch] = useState('');
  const [filterFavorites, setFilterFavorites] = useState(false);
  const [editingContact, setEditingContact] = useState<Contact | null>(null);

  const filteredContacts = useMemo(() => {
    return contacts
      .filter((contact) => {
        if (filterFavorites && !contact.favorite) return false;
        
        const searchLower = search.toLowerCase();
        return (
          contact.name.toLowerCase().includes(searchLower) ||
          contact.company.toLowerCase().includes(searchLower) ||
          contact.role.toLowerCase().includes(searchLower) ||
          contact.tags.some(tag => tag.toLowerCase().includes(searchLower))
        );
      })
      .sort((a, b) => {
        if (a.favorite === b.favorite) return a.name.localeCompare(b.name);
        return a.favorite ? -1 : 1;
      });
  }, [contacts, search, filterFavorites]);

  const handleToggleFavorite = (id: string) => {
    setContacts(contacts.map(contact =>
      contact.id === id
        ? { ...contact, favorite: !contact.favorite }
        : contact
    ));
  };

  const handleEditContact = (updatedContact: Contact) => {
    setContacts(contacts.map(contact =>
      contact.id === updatedContact.id ? updatedContact : contact
    ));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center space-x-2">
            <Users className="w-8 h-8 text-blue-600" />
            <h1 className="text-3xl font-bold text-gray-900">Contacts</h1>
          </div>
          <div className="flex items-center space-x-4">
            <div className="relative">
              <Search className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search contacts..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none w-64"
              />
            </div>
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                checked={filterFavorites}
                onChange={(e) => setFilterFavorites(e.target.checked)}
                className="form-checkbox h-5 w-5 text-blue-600 rounded focus:ring-blue-500"
              />
              <span className="text-gray-700">Show favorites only</span>
            </label>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredContacts.map((contact) => (
            <ContactCard
              key={contact.id}
              contact={contact}
              onToggleFavorite={handleToggleFavorite}
              onEdit={setEditingContact}
            />
          ))}
        </div>

        {filteredContacts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">
              No contacts found matching your search criteria.
            </p>
          </div>
        )}

        {editingContact && (
          <EditContactModal
            contact={editingContact}
            onClose={() => setEditingContact(null)}
            onSave={handleEditContact}
          />
        )}
      </div>
    </div>
  );
}

export default App;