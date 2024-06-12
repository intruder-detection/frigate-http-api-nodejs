export enum Preview {
  Gif = 'events/<event_id>/preview.gif',
  MetadataForPreviewsInRange = 'preview/<camera_name>/start/<start_timestamp>/end/<end_timestamp>',
  MetadataForPreviewsInHour = 'preview/<year>-<month>/<day>/<hour>/<camera_name>/<timezone>',
  Frame  = 'preview/<file_name>/thumbnail.jpg',
  GifFromPreview = '<camera_name>/start/<start_timestamp>/end/<end_timestamp>/preview.gif',
}
