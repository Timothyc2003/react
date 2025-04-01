"use client";
import { useState } from 'react';
import Card from './Card';
import Button from './Button';
import styles from './Signup.module.css';

interface SignupProps {
  onAddUser: (user: {
    name: string;
    username: string;
    email: string;
    password: string;
    imageUrl: string;
  }) => void;
}

export default function Signup({ onAddUser }: SignupProps) {
  const [formData, setFormData] = useState({
    name: '',
    username: '',
    email: '',
    password: '',
    imageLink: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.username || !formData.password) return;
    
    onAddUser({
      name: formData.name,
      username: formData.username,
      email: formData.email,
      password: formData.password,
      imageUrl: formData.imageLink || 'https://via.placeholder.com/150'
    });
    
    setFormData({
      name: '',
      username: '',
      email: '',
      password: '',
      imageLink: ''
    });
  };

  return (
    <div className="flex justify-center items-center py-8">
      <Card className={styles.input}>
        <h1 className="text-4xl font-bold mb-6 text-center">Signup</h1>
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Name</label>
          <input
            name="name"
            type="text"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your name"
          />
          
          <label htmlFor="username">Username*</label>
          <input
            name="username"
            type="text"
            value={formData.username}
            onChange={handleChange}
            placeholder="Enter your username"
            required
          />
          
          <label htmlFor="email">Email</label>
          <input
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
          />
          
          <label htmlFor="password">Password*</label>
          <input
            name="password"
            type="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Enter your password"
            required
          />
          
          <label htmlFor="imageLink">Image Link</label>
          <input
            name="imageLink"
            type="url"
            value={formData.imageLink}
            onChange={handleChange}
            placeholder="Enter image URL"
          />
          
          <Button type="submit">Sign Up</Button>
        </form>
      </Card>
    </div>
  );
}