export interface Events {
  before?: number; // Epoch time (optional)
  after?: number;  // Epoch time (optional)
  cameras?: string; // Comma-separated list of cameras (optional)
  labels?: string;  // Comma-separated list of labels (optional)
  zones?: string;   // Comma-separated list of zones (optional)
  limit?: number;   // Limit the number of events returned (optional)
  has_snapshot?: 0 | 1; // Filter to events with snapshots (0 or 1) (optional)
  has_clip?: 0 | 1;    // Filter to events with clips (0 or 1) (optional)
  include_thumbnails?: 0 | 1; // Include thumbnails in response (0 or 1) (optional)
  in_progress?: 0 | 1;   // Limit to events in progress (0 or 1) (optional)
  time_range?: string; // Time range in format after,before (00:00,24:00) (optional)
  timezone?: string;   // Timezone to use for time range (optional)
  min_score?: number;   // Minimum score of the event (optional)
  max_score?: number;   // Maximum score of the event (optional)
  is_submitted?: 0 | 1; // Filter events submitted to Frigate+ (0 or 1) (optional)
  min_length?: number; // Minimum length of the event (optional)
  max_length?: number; // Maximum length of the event (optional)
}
