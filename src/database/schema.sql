-- Scheme views table
CREATE TABLE scheme_views (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  scheme_id TEXT NOT NULL,
  language TEXT DEFAULT 'en',
  state TEXT,
  timestamp TIMESTAMPTZ DEFAULT NOW()
);

-- Chat sessions table  
CREATE TABLE chat_sessions (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  language TEXT DEFAULT 'en',
  state TEXT,
  message_count INTEGER DEFAULT 0,
  schemes_matched INTEGER DEFAULT 0,
  timestamp TIMESTAMPTZ DEFAULT NOW()
);

-- Analytics events table
CREATE TABLE analytics_events (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  event TEXT NOT NULL,
  scheme_id TEXT,
  language TEXT,
  state TEXT,
  timestamp TIMESTAMPTZ DEFAULT NOW()
);

-- Indexes for performance
CREATE INDEX idx_scheme_views_scheme_id ON scheme_views(scheme_id);
CREATE INDEX idx_scheme_views_timestamp ON scheme_views(timestamp);
CREATE INDEX idx_chat_sessions_timestamp ON chat_sessions(timestamp);
CREATE INDEX idx_analytics_events_event ON analytics_events(event);
