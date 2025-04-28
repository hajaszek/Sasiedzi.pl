import { useState } from 'react';

export default function Chat() {
  const [selectedUser, setSelectedUser] = useState<string | null>(null);
  const [messages, setMessages] = useState<string[]>([]);
  const [newMessage, setNewMessage] = useState<string>('');

  const users = ['Jan Kowalski', 'Anna Nowak', 'Grupa Sąsiedzi z Łęcznej'];

  const handleSelectUser = (user: string) => {
    setSelectedUser(user);
    setMessages([]); // Nowa rozmowa = pusta historia
  };

  const handleSendMessage = () => {
    if (newMessage.trim() !== '') {
      setMessages([...messages, `Ty: ${newMessage}`]);
      setNewMessage('');
    }
  };

  return (
    <div style={{ display: 'flex', height: '100vh' }}>
      {/* Lista kontaktów */}
      <div style={{ width: '250px', borderRight: '1px solid #ccc', padding: '20px' }}>
        <h3>Kontakty</h3>
        {users.map((user) => (
          <div
            key={user}
            onClick={() => handleSelectUser(user)}
            style={{
              padding: '10px',
              cursor: 'pointer',
              backgroundColor: selectedUser === user ? '#eee' : 'transparent',
              borderRadius: '5px',
              marginBottom: '10px'
            }}
          >
            {user}
          </div>
        ))}
      </div>

      {/* Okno rozmowy */}
      <div style={{ flex: 1, padding: '20px', display: 'flex', flexDirection: 'column' }}>
        {selectedUser ? (
          <>
            <h2>{selectedUser}</h2>
            <div style={{ flex: 1, marginTop: '20px', border: '1px solid #ccc', padding: '10px', borderRadius: '5px', overflowY: 'auto' }}>
              {messages.map((msg, index) => (
                <div key={index} style={{ marginBottom: '10px' }}>{msg}</div>
              ))}
            </div>
            <div style={{ marginTop: '20px', display: 'flex' }}>
              <input
                type="text"
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                placeholder="Napisz wiadomość..."
                style={{ flex: 1, padding: '10px', fontSize: '1rem', borderRadius: '5px', border: '1px solid #ccc' }}
              />
              <button
                onClick={handleSendMessage}
                style={{ marginLeft: '10px', padding: '10px 20px', fontSize: '1rem', cursor: 'pointer' }}
              >
                ➤
              </button>
            </div>
          </>
        ) : (
          <p>Wybierz użytkownika, aby rozpocząć rozmowę.</p>
        )}
      </div>
    </div>
  );
}

