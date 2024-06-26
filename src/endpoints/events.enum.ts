export enum Events {
  Events = 'events',
  EventsSummary = 'events/summary',
  ById = 'events/<event_id>',
  IdRetain = 'events/<event_id>/retain',
  SubmitForFrigatePlus = 'events/<event_id>/plus',
  SubmitForFrigatePlusFalsePositive = 'events/<event_id>/false_positive',
  SubLabel = 'events/<event_id>/sub_label',
  ThumbnailJPG = 'events/<event_id>/thumbnail.jpg',
  ClipMp4 = 'events/<event_id>/clip.mp4',
  SnapshotCleanPNG = 'events/<event_id>/snapshot-clean.png',
  SnapshotJPG = 'events/<event_id>/snapshot.jpg',
  CreateLabel = 'events/<camera_name>/<label>/create',
  EndEvent = 'events/<event_id>/end',
}
