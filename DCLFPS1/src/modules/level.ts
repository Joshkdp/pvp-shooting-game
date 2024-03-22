var entity24466 = new Entity("wall1")
engine.addEntity(entity24466)
entity24466.addComponent(new Transform({ position: new Vector3(75.8, 4.96, 20) }))
entity24466.getComponent(Transform).rotation.set(0, 0, 0, 1)
entity24466.getComponent(Transform).scale.set(90, 8, 1)
entity24466.addComponent(new BoxShape())
entity24466.getComponent(BoxShape).withCollisions = true
var material23552 = new Material()
material23552.albedoColor = new Color3(1, 1, 1)
material23552.metallic = 0
material23552.roughness = 0
material23552.albedoTexture = new Texture("textures/emission-wall.jpg")
material23552.emissiveColor = new Color3(0, 5, 5)
material23552.emissiveTexture = new Texture("textures/emission-wall.jpg")
entity24466.addComponent(material23552)

var entity23984 = new Entity("wall2")
engine.addEntity(entity23984)
entity23984.addComponent(new Transform({ position: new Vector3(75.8, 4.96, 80) }))
entity23984.getComponent(Transform).rotation.set(0, 0, 0, 1)
entity23984.getComponent(Transform).scale.set(90, 8, 1)
entity23984.addComponent(new BoxShape())
entity23984.getComponent(BoxShape).withCollisions = true
entity23984.addComponent(material23552)

var entity23704 = new Entity("wall3")
engine.addEntity(entity23704)
entity23704.addComponent(new Transform({ position: new Vector3(30.8, 4.96, 50) }))
entity23704.getComponent(Transform).rotation.set(0, 0, 0, 1)
entity23704.getComponent(Transform).scale.set(1, 8, 60)
entity23704.addComponent(new BoxShape())
entity23704.getComponent(BoxShape).withCollisions = true
entity23704.addComponent(material23552)

var entity23850 = new Entity("wall4")
engine.addEntity(entity23850)
entity23850.addComponent(new Transform({ position: new Vector3(120.8, 4.96, 50) }))
entity23850.getComponent(Transform).rotation.set(0, 0, 0, 1)
entity23850.getComponent(Transform).scale.set(1, 8, 60)
entity23850.addComponent(new BoxShape())
entity23850.getComponent(BoxShape).withCollisions = true
entity23850.addComponent(material23552)

var entity24416 = new Entity("obstacle")
engine.addEntity(entity24416)
entity24416.addComponent(new Transform({ position: new Vector3(32.88, 2.55, 25.06) }))
entity24416.getComponent(Transform).rotation.set(0, 0, 0, 1)
entity24416.getComponent(Transform).scale.set(3, 3, 0.5)
entity24416.addComponent(new BoxShape())
entity24416.getComponent(BoxShape).withCollisions = true
entity24416.addComponent(material23552)

var entity24606 = new Entity("obstacle (8)")
engine.addEntity(entity24606)
entity24606.addComponent(new Transform({ position: new Vector3(35.88, 2.55, 22.06) }))
entity24606.getComponent(Transform).rotation.set(0, 0, 0, 1)
entity24606.getComponent(Transform).scale.set(0.5, 3, 3)
entity24606.addComponent(new BoxShape())
entity24606.getComponent(BoxShape).withCollisions = true
entity24606.addComponent(material23552)

var entity24426 = new Entity("obstacle (2)")
engine.addEntity(entity24426)
entity24426.addComponent(new Transform({ position: new Vector3(58.88, 2.55, 30.06) }))
entity24426.getComponent(Transform).rotation.set(0, 0, 0, 1)
entity24426.getComponent(Transform).scale.set(3, 3, 0.5)
entity24426.addComponent(new BoxShape())
entity24426.getComponent(BoxShape).withCollisions = true
entity24426.addComponent(material23552)

var entity10392 = new Entity("obstacle (52)")
engine.addEntity(entity10392)
entity10392.addComponent(new Transform({ position: new Vector3(118.6, 2.55, 67) }))
entity10392.getComponent(Transform).rotation.set(0, 0, 0, 1)
entity10392.getComponent(Transform).scale.set(3, 3, 0.5)
entity10392.addComponent(new BoxShape())
entity10392.getComponent(BoxShape).withCollisions = true
entity10392.addComponent(material23552)

var entity24616 = new Entity("obstacle (3)")
engine.addEntity(entity24616)
entity24616.addComponent(new Transform({ position: new Vector3(58.88, 2.55, 43.06) }))
entity24616.getComponent(Transform).rotation.set(0, 0, 0, 1)
entity24616.getComponent(Transform).scale.set(3, 3, 0.5)
entity24616.addComponent(new BoxShape())
entity24616.getComponent(BoxShape).withCollisions = true
entity24616.addComponent(material23552)

var entity11228 = new Entity("obstacle (63)")
engine.addEntity(entity11228)
entity11228.addComponent(new Transform({ position: new Vector3(102.1, 2.55, 69.7) }))
entity11228.getComponent(Transform).rotation.set(0, 0, 0, 1)
entity11228.getComponent(Transform).scale.set(3, 3, 0.5)
entity11228.addComponent(new BoxShape())
entity11228.getComponent(BoxShape).withCollisions = true
entity11228.addComponent(material23552)

var entity4304 = new Entity("obstacle (24)")
engine.addEntity(entity4304)
entity4304.addComponent(new Transform({ position: new Vector3(47.8, 2.55, 60) }))
entity4304.getComponent(Transform).rotation.set(0, 0, 0, 1)
entity4304.getComponent(Transform).scale.set(33, 3, 0.5)
entity4304.addComponent(new BoxShape())
entity4304.getComponent(BoxShape).withCollisions = true
entity4304.addComponent(material23552)

var entity4722 = new Entity("obstacle (25)")
engine.addEntity(entity4722)
entity4722.addComponent(new Transform({ position: new Vector3(103.8, 2.55, 40) }))
entity4722.getComponent(Transform).rotation.set(0, 0, 0, 1)
entity4722.getComponent(Transform).scale.set(33, 3, 0.5)
entity4722.addComponent(new BoxShape())
entity4722.getComponent(BoxShape).withCollisions = true
entity4722.addComponent(material23552)

var entity24386 = new Entity("obstacle (4)")
engine.addEntity(entity24386)
entity24386.addComponent(new Transform({ position: new Vector3(36.88, 2.55, 43.06) }))
entity24386.getComponent(Transform).rotation.set(0, 0.2588191, 0, 0.9659258)
entity24386.getComponent(Transform).scale.set(3, 3, 0.5)
entity24386.addComponent(new BoxShape())
entity24386.getComponent(BoxShape).withCollisions = true
entity24386.addComponent(material23552)

var entity9970 = new Entity("obstacle (47)")
engine.addEntity(entity9970)
entity9970.addComponent(new Transform({ position: new Vector3(49.7, 2.55, 72.8) }))
entity9970.getComponent(Transform).rotation.set(0, 0.2588191, 0, 0.9659258)
entity9970.getComponent(Transform).scale.set(3, 3, 0.5)
entity9970.addComponent(new BoxShape())
entity9970.getComponent(BoxShape).withCollisions = true
entity9970.addComponent(material23552)

var entity24024 = new Entity("obstacle (5)")
engine.addEntity(entity24024)
entity24024.addComponent(new Transform({ position: new Vector3(45.88, 2.05, 40.06) }))
entity24024.getComponent(Transform).rotation.set(0, -0.3826834, 0, 0.9238796)
entity24024.getComponent(Transform).scale.set(3, 2, 0.5)
entity24024.addComponent(new BoxShape())
entity24024.getComponent(BoxShape).withCollisions = true
entity24024.addComponent(material23552)

var entity11230 = new Entity("obstacle (64)")
engine.addEntity(entity11230)
entity11230.addComponent(new Transform({ position: new Vector3(89.1, 2.05, 66.7) }))
entity11230.getComponent(Transform).rotation.set(0, -0.3826834, 0, 0.9238796)
entity11230.getComponent(Transform).scale.set(3, 2, 0.5)
entity11230.addComponent(new BoxShape())
entity11230.getComponent(BoxShape).withCollisions = true
entity11230.addComponent(material23552)

var entity9972 = new Entity("obstacle (48)")
engine.addEntity(entity9972)
entity9972.addComponent(new Transform({ position: new Vector3(58.7, 2.05, 69.8) }))
entity9972.getComponent(Transform).rotation.set(0, -0.3826834, 0, 0.9238796)
entity9972.getComponent(Transform).scale.set(3, 2, 0.5)
entity9972.addComponent(new BoxShape())
entity9972.getComponent(BoxShape).withCollisions = true
entity9972.addComponent(material23552)

var entity23604 = new Entity("obstacle (22)")
engine.addEntity(entity23604)
entity23604.addComponent(new Transform({ position: new Vector3(40.88, 2.05, 35.06) }))
entity23604.getComponent(Transform).rotation.set(0, 0.2588191, 0, 0.9659258)
entity23604.getComponent(Transform).scale.set(4, 2, 0.5)
entity23604.addComponent(new BoxShape())
entity23604.getComponent(BoxShape).withCollisions = true
entity23604.addComponent(material23552)

var entity9974 = new Entity("obstacle (49)")
engine.addEntity(entity9974)
entity9974.addComponent(new Transform({ position: new Vector3(53.7, 2.05, 64.8) }))
entity9974.getComponent(Transform).rotation.set(0, 0.2588191, 0, 0.9659258)
entity9974.getComponent(Transform).scale.set(4, 2, 0.5)
entity9974.addComponent(new BoxShape())
entity9974.getComponent(BoxShape).withCollisions = true
entity9974.addComponent(material23552)

var entity24054 = new Entity("obstacle (23)")
engine.addEntity(entity24054)
entity24054.addComponent(new Transform({ position: new Vector3(39.88, 2.55, 37.06) }))
entity24054.getComponent(Transform).rotation.set(0, 0.5735764, 0, 0.8191521)
entity24054.getComponent(Transform).scale.set(3, 3, 0.5)
entity24054.addComponent(new BoxShape())
entity24054.getComponent(BoxShape).withCollisions = true
entity24054.addComponent(material23552)

var entity9976 = new Entity("obstacle (50)")
engine.addEntity(entity9976)
entity9976.addComponent(new Transform({ position: new Vector3(52.7, 2.55, 66.8) }))
entity9976.getComponent(Transform).rotation.set(0, 0.5735764, 0, 0.8191521)
entity9976.getComponent(Transform).scale.set(3, 3, 0.5)
entity9976.addComponent(new BoxShape())
entity9976.getComponent(BoxShape).withCollisions = true
entity9976.addComponent(material23552)

var entity23954 = new Entity("obstacle (17)")
engine.addEntity(entity23954)
entity23954.addComponent(new Transform({ position: new Vector3(53.88, 2.05, 40.06) }))
entity23954.getComponent(Transform).rotation.set(0, -0.3826834, 0, 0.9238796)
entity23954.getComponent(Transform).scale.set(3, 2, 0.5)
entity23954.addComponent(new BoxShape())
entity23954.getComponent(BoxShape).withCollisions = true
entity23954.addComponent(material23552)

var entity11232 = new Entity("obstacle (65)")
engine.addEntity(entity11232)
entity11232.addComponent(new Transform({ position: new Vector3(97.1, 2.05, 66.7) }))
entity11232.getComponent(Transform).rotation.set(0, -0.3826834, 0, 0.9238796)
entity11232.getComponent(Transform).scale.set(3, 2, 0.5)
entity11232.addComponent(new BoxShape())
entity11232.getComponent(BoxShape).withCollisions = true
entity11232.addComponent(material23552)

var entity24396 = new Entity("obstacle (18)")
engine.addEntity(entity24396)
entity24396.addComponent(new Transform({ position: new Vector3(53.88, 2.05, 38.06) }))
entity24396.getComponent(Transform).rotation.set(0, 0.3826834, 0, 0.9238796)
entity24396.getComponent(Transform).scale.set(3, 2, 0.5)
entity24396.addComponent(new BoxShape())
entity24396.getComponent(BoxShape).withCollisions = true
entity24396.addComponent(material23552)

var entity11234 = new Entity("obstacle (66)")
engine.addEntity(entity11234)
entity11234.addComponent(new Transform({ position: new Vector3(97.1, 2.05, 64.7) }))
entity11234.getComponent(Transform).rotation.set(0, 0.3826834, 0, 0.9238796)
entity11234.getComponent(Transform).scale.set(3, 2, 0.5)
entity11234.addComponent(new BoxShape())
entity11234.getComponent(BoxShape).withCollisions = true
entity11234.addComponent(material23552)

var entity24516 = new Entity("obstacle (19)")
engine.addEntity(entity24516)
entity24516.addComponent(new Transform({ position: new Vector3(49.88, 2.05, 32.06) }))
entity24516.getComponent(Transform).rotation.set(0, 0, 0, 1)
entity24516.getComponent(Transform).scale.set(4, 2, 0.5)
entity24516.addComponent(new BoxShape())
entity24516.getComponent(BoxShape).withCollisions = true
entity24516.addComponent(material23552)

var entity10394 = new Entity("obstacle (53)")
engine.addEntity(entity10394)
entity10394.addComponent(new Transform({ position: new Vector3(109.6, 2.05, 69) }))
entity10394.getComponent(Transform).rotation.set(0, 0, 0, 1)
entity10394.getComponent(Transform).scale.set(4, 2, 0.5)
entity10394.addComponent(new BoxShape())
entity10394.getComponent(BoxShape).withCollisions = true
entity10394.addComponent(material23552)

var entity10938 = new Entity("obstacle (58)")
engine.addEntity(entity10938)
entity10938.addComponent(new Transform({ position: new Vector3(45, 2.05, 71.6) }))
entity10938.getComponent(Transform).rotation.set(0, 0, 0, 1)
entity10938.getComponent(Transform).scale.set(4, 2, 0.5)
entity10938.addComponent(new BoxShape())
entity10938.getComponent(BoxShape).withCollisions = true
entity10938.addComponent(material23552)

var entity9608 = new Entity("obstacle (44)")
engine.addEntity(entity9608)
entity9608.addComponent(new Transform({ position: new Vector3(76.1, 2.05, 48.9) }))
entity9608.getComponent(Transform).rotation.set(0, 0, 0, 1)
entity9608.getComponent(Transform).scale.set(4, 2, 0.5)
entity9608.addComponent(new BoxShape())
entity9608.getComponent(BoxShape).withCollisions = true
entity9608.addComponent(material23552)

var entity24626 = new Entity("obstacle (20)")
engine.addEntity(entity24626)
entity24626.addComponent(new Transform({ position: new Vector3(49.38, 1.55, 36.06) }))
entity24626.getComponent(Transform).rotation.set(0, 0, 0, 1)
entity24626.getComponent(Transform).scale.set(5, 1, 0.5)
entity24626.addComponent(new BoxShape())
entity24626.getComponent(BoxShape).withCollisions = true
entity24626.addComponent(material23552)

var entity9610 = new Entity("obstacle (45)")
engine.addEntity(entity9610)
entity9610.addComponent(new Transform({ position: new Vector3(75.6, 1.55, 52.9) }))
entity9610.getComponent(Transform).rotation.set(0, 0, 0, 1)
entity9610.getComponent(Transform).scale.set(5, 1, 0.5)
entity9610.addComponent(new BoxShape())
entity9610.getComponent(BoxShape).withCollisions = true
entity9610.addComponent(material23552)

var entity24136 = new Entity("obstacle (21)")
engine.addEntity(entity24136)
entity24136.addComponent(new Transform({ position: new Vector3(51.88, 2.55, 34.06) }))
entity24136.getComponent(Transform).rotation.set(0, 0.7071068, 0, 0.7071068)
entity24136.getComponent(Transform).scale.set(4.5, 3, 0.5)
entity24136.addComponent(new BoxShape())
entity24136.getComponent(BoxShape).withCollisions = true
entity24136.addComponent(material23552)

var entity9612 = new Entity("obstacle (46)")
engine.addEntity(entity9612)
entity9612.addComponent(new Transform({ position: new Vector3(78.1, 2.55, 50.9) }))
entity9612.getComponent(Transform).rotation.set(0, 0.7071068, 0, 0.7071068)
entity9612.getComponent(Transform).scale.set(4.5, 3, 0.5)
entity9612.addComponent(new BoxShape())
entity9612.getComponent(BoxShape).withCollisions = true
entity9612.addComponent(material23552)

var entity24376 = new Entity("obstacle (6)")
engine.addEntity(entity24376)
entity24376.addComponent(new Transform({ position: new Vector3(50.88, 2.55, 25.06) }))
entity24376.getComponent(Transform).rotation.set(0, -0.258819, 0, 0.9659259)
entity24376.getComponent(Transform).scale.set(3, 3, 0.5)
entity24376.addComponent(new BoxShape())
entity24376.getComponent(BoxShape).withCollisions = true
entity24376.addComponent(material23552)

var entity10396 = new Entity("obstacle (54)")
engine.addEntity(entity10396)
entity10396.addComponent(new Transform({ position: new Vector3(110.6, 2.55, 62) }))
entity10396.getComponent(Transform).rotation.set(0, -0.258819, 0, 0.9659259)
entity10396.getComponent(Transform).scale.set(3, 3, 0.5)
entity10396.addComponent(new BoxShape())
entity10396.getComponent(BoxShape).withCollisions = true
entity10396.addComponent(material23552)

var entity10940 = new Entity("obstacle (59)")
engine.addEntity(entity10940)
entity10940.addComponent(new Transform({ position: new Vector3(45.99999, 2.55, 64.6) }))
entity10940.getComponent(Transform).rotation.set(0, -0.258819, 0, 0.9659259)
entity10940.getComponent(Transform).scale.set(3, 3, 0.5)
entity10940.addComponent(new BoxShape())
entity10940.getComponent(BoxShape).withCollisions = true
entity10940.addComponent(material23552)

var entity24446 = new Entity("obstacle (7)")
engine.addEntity(entity24446)
entity24446.addComponent(new Transform({ position: new Vector3(50.88, 1.55, 27.06) }))
entity24446.getComponent(Transform).rotation.set(0, 0.2588191, 0, 0.9659258)
entity24446.getComponent(Transform).scale.set(3, 1, 0.5)
entity24446.addComponent(new BoxShape())
entity24446.getComponent(BoxShape).withCollisions = true
entity24446.addComponent(material23552)

var entity10398 = new Entity("obstacle (55)")
engine.addEntity(entity10398)
entity10398.addComponent(new Transform({ position: new Vector3(110.6, 1.55, 64) }))
entity10398.getComponent(Transform).rotation.set(0, 0.2588191, 0, 0.9659258)
entity10398.getComponent(Transform).scale.set(3, 1, 0.5)
entity10398.addComponent(new BoxShape())
entity10398.getComponent(BoxShape).withCollisions = true
entity10398.addComponent(material23552)

var entity10942 = new Entity("obstacle (60)")
engine.addEntity(entity10942)
entity10942.addComponent(new Transform({ position: new Vector3(45.99999, 1.55, 66.6) }))
entity10942.getComponent(Transform).rotation.set(0, 0.2588191, 0, 0.9659258)
entity10942.getComponent(Transform).scale.set(3, 1, 0.5)
entity10942.addComponent(new BoxShape())
entity10942.getComponent(BoxShape).withCollisions = true
entity10942.addComponent(material23552)

var entity24366 = new Entity("obstacle (9)")
engine.addEntity(entity24366)
entity24366.addComponent(new Transform({ position: new Vector3(46.88, 2.55, 22.06) }))
entity24366.getComponent(Transform).rotation.set(0, 0.7071068, 0, 0.7071068)
entity24366.getComponent(Transform).scale.set(3, 3, 0.5)
entity24366.addComponent(new BoxShape())
entity24366.getComponent(BoxShape).withCollisions = true
entity24366.addComponent(material23552)

var entity5018 = new Entity("obstacle (26)")
engine.addEntity(entity5018)
entity5018.addComponent(new Transform({ position: new Vector3(70.8, 2.55, 30) }))
entity5018.getComponent(Transform).rotation.set(0, 0.7071068, 0, 0.7071068)
entity5018.getComponent(Transform).scale.set(20, 3, 0.5)
entity5018.addComponent(new BoxShape())
entity5018.getComponent(BoxShape).withCollisions = true
entity5018.addComponent(material23552)

var entity5334 = new Entity("obstacle (27)")
engine.addEntity(entity5334)
entity5334.addComponent(new Transform({ position: new Vector3(80.8, 2.55, 70) }))
entity5334.getComponent(Transform).rotation.set(0, 0.7071068, 0, 0.7071068)
entity5334.getComponent(Transform).scale.set(20, 3, 0.5)
entity5334.addComponent(new BoxShape())
entity5334.getComponent(BoxShape).withCollisions = true
entity5334.addComponent(material23552)

var entity24146 = new Entity("obstacle (10)")
engine.addEntity(entity24146)
entity24146.addComponent(new Transform({ position: new Vector3(44.88, 2.55, 48.06) }))
entity24146.getComponent(Transform).rotation.set(0, 0.7071068, 0, 0.7071068)
entity24146.getComponent(Transform).scale.set(3, 3, 0.5)
entity24146.addComponent(new BoxShape())
entity24146.getComponent(BoxShape).withCollisions = true
entity24146.addComponent(material23552)

var entity11236 = new Entity("obstacle (67)")
engine.addEntity(entity11236)
entity11236.addComponent(new Transform({ position: new Vector3(88.1, 2.55, 74.7) }))
entity11236.getComponent(Transform).rotation.set(0, 0.7071068, 0, 0.7071068)
entity11236.getComponent(Transform).scale.set(3, 3, 0.5)
entity11236.addComponent(new BoxShape())
entity11236.getComponent(BoxShape).withCollisions = true
entity11236.addComponent(material23552)

var entity9978 = new Entity("obstacle (51)")
engine.addEntity(entity9978)
entity9978.addComponent(new Transform({ position: new Vector3(57.7, 2.55, 77.8) }))
entity9978.getComponent(Transform).rotation.set(0, 0.7071068, 0, 0.7071068)
entity9978.getComponent(Transform).scale.set(3, 3, 0.5)
entity9978.addComponent(new BoxShape())
entity9978.getComponent(BoxShape).withCollisions = true
entity9978.addComponent(material23552)

var entity5744 = new Entity("obstacle (28)")
engine.addEntity(entity5744)
entity5744.addComponent(new Transform({ position: new Vector3(105.7, 2.55, 78) }))
entity5744.getComponent(Transform).rotation.set(0, 0.7071068, 0, 0.7071068)
entity5744.getComponent(Transform).scale.set(3, 3, 0.5)
entity5744.addComponent(new BoxShape())
entity5744.getComponent(BoxShape).withCollisions = true
entity5744.addComponent(material23552)

var entity6098 = new Entity("obstacle (30)")
engine.addEntity(entity6098)
entity6098.addComponent(new Transform({ position: new Vector3(40.8, 2.55, 78) }))
entity6098.getComponent(Transform).rotation.set(0, 0.7071068, 0, 0.7071068)
entity6098.getComponent(Transform).scale.set(3, 3, 0.5)
entity6098.addComponent(new BoxShape())
entity6098.getComponent(BoxShape).withCollisions = true
entity6098.addComponent(material23552)

var entity24286 = new Entity("obstacle (11)")
engine.addEntity(entity24286)
entity24286.addComponent(new Transform({ position: new Vector3(49.88, 2.55, 48.06) }))
entity24286.getComponent(Transform).rotation.set(0, 0.7071068, 0, 0.7071068)
entity24286.getComponent(Transform).scale.set(3, 3, 0.5)
entity24286.addComponent(new BoxShape())
entity24286.getComponent(BoxShape).withCollisions = true
entity24286.addComponent(material23552)

var entity11238 = new Entity("obstacle (68)")
engine.addEntity(entity11238)
entity11238.addComponent(new Transform({ position: new Vector3(93.1, 2.55, 74.7) }))
entity11238.getComponent(Transform).rotation.set(0, 0.7071068, 0, 0.7071068)
entity11238.getComponent(Transform).scale.set(3, 3, 0.5)
entity11238.addComponent(new BoxShape())
entity11238.getComponent(BoxShape).withCollisions = true
entity11238.addComponent(material23552)

var entity5746 = new Entity("obstacle (29)")
engine.addEntity(entity5746)
entity5746.addComponent(new Transform({ position: new Vector3(110.7, 2.55, 78) }))
entity5746.getComponent(Transform).rotation.set(0, 0.7071068, 0, 0.7071068)
entity5746.getComponent(Transform).scale.set(3, 3, 0.5)
entity5746.addComponent(new BoxShape())
entity5746.getComponent(BoxShape).withCollisions = true
entity5746.addComponent(material23552)

var entity6100 = new Entity("obstacle (31)")
engine.addEntity(entity6100)
entity6100.addComponent(new Transform({ position: new Vector3(45.8, 2.55, 78) }))
entity6100.getComponent(Transform).rotation.set(0, 0.7071068, 0, 0.7071068)
entity6100.getComponent(Transform).scale.set(3, 3, 0.5)
entity6100.addComponent(new BoxShape())
entity6100.getComponent(BoxShape).withCollisions = true
entity6100.addComponent(material23552)

var entity23654 = new Entity("obstacle (12)")
engine.addEntity(entity23654)
entity23654.addComponent(new Transform({ position: new Vector3(40.88, 1.3, 29.06) }))
entity23654.getComponent(Transform).rotation.set(0, 0.2588191, 0, 0.9659258)
entity23654.getComponent(Transform).scale.set(1.5, 0.5, 1.5)
entity23654.addComponent(new BoxShape())
entity23654.getComponent(BoxShape).withCollisions = true
entity23654.addComponent(material23552)

var entity6740 = new Entity("obstacle (32)")
engine.addEntity(entity6740)
entity6740.addComponent(new Transform({ position: new Vector3(84.8, 1.3, 31) }))
entity6740.getComponent(Transform).rotation.set(0, 0.2588191, 0, 0.9659258)
entity6740.getComponent(Transform).scale.set(1.5, 0.5, 1.5)
entity6740.addComponent(new BoxShape())
entity6740.getComponent(BoxShape).withCollisions = true
entity6740.addComponent(material23552)

var entity7584 = new Entity("obstacle (36)")
engine.addEntity(entity7584)
entity7584.addComponent(new Transform({ position: new Vector3(101.8, 1.3, 61) }))
entity7584.getComponent(Transform).rotation.set(0, 0.2588191, 0, 0.9659258)
entity7584.getComponent(Transform).scale.set(1.5, 0.5, 1.5)
entity7584.addComponent(new BoxShape())
entity7584.getComponent(BoxShape).withCollisions = true
entity7584.addComponent(material23552)

var entity10944 = new Entity("obstacle (61)")
engine.addEntity(entity10944)
entity10944.addComponent(new Transform({ position: new Vector3(37.19999, 1.3, 63.6) }))
entity10944.getComponent(Transform).rotation.set(0, 0.2588191, 0, 0.9659258)
entity10944.getComponent(Transform).scale.set(1.5, 0.5, 1.5)
entity10944.addComponent(new BoxShape())
entity10944.getComponent(BoxShape).withCollisions = true
entity10944.addComponent(material23552)

var entity23664 = new Entity("obstacle (13)")
engine.addEntity(entity23664)
entity23664.addComponent(new Transform({ position: new Vector3(37.88, 1.3, 27.06) }))
entity23664.getComponent(Transform).rotation.set(0, 0.2164396, 0, 0.9762961)
entity23664.getComponent(Transform).scale.set(1.5, 0.5, 1.5)
entity23664.addComponent(new BoxShape())
entity23664.getComponent(BoxShape).withCollisions = true
entity23664.addComponent(material23552)

var entity6742 = new Entity("obstacle (33)")
engine.addEntity(entity6742)
entity6742.addComponent(new Transform({ position: new Vector3(81.7, 1.3, 29.1) }))
entity6742.getComponent(Transform).rotation.set(0, 0.2164396, 0, 0.9762961)
entity6742.getComponent(Transform).scale.set(1.5, 0.5, 1.5)
entity6742.addComponent(new BoxShape())
entity6742.getComponent(BoxShape).withCollisions = true
entity6742.addComponent(material23552)

var entity7586 = new Entity("obstacle (37)")
engine.addEntity(entity7586)
entity7586.addComponent(new Transform({ position: new Vector3(98.8, 1.3, 60) }))
entity7586.getComponent(Transform).rotation.set(0, 0.2164396, 0, 0.9762961)
entity7586.getComponent(Transform).scale.set(1.5, 0.5, 1.5)
entity7586.addComponent(new BoxShape())
entity7586.getComponent(BoxShape).withCollisions = true
entity7586.addComponent(material23552)

var entity10946 = new Entity("obstacle (62)")
engine.addEntity(entity10946)
entity10946.addComponent(new Transform({ position: new Vector3(34.19999, 1.3, 62.6) }))
entity10946.getComponent(Transform).rotation.set(0, 0.2164396, 0, 0.9762961)
entity10946.getComponent(Transform).scale.set(1.5, 0.5, 1.5)
entity10946.addComponent(new BoxShape())
entity10946.getComponent(BoxShape).withCollisions = true
entity10946.addComponent(material23552)

var entity23964 = new Entity("obstacle (14)")
engine.addEntity(entity23964)
entity23964.addComponent(new Transform({ position: new Vector3(41.88, 1.3, 25.06) }))
entity23964.getComponent(Transform).rotation.set(0, 0.3826834, 0, 0.9238796)
entity23964.getComponent(Transform).scale.set(1.5, 0.5, 1.5)
entity23964.addComponent(new BoxShape())
entity23964.getComponent(BoxShape).withCollisions = true
entity23964.addComponent(material23552)

var entity6744 = new Entity("obstacle (34)")
engine.addEntity(entity6744)
entity6744.addComponent(new Transform({ position: new Vector3(85.8, 1.3, 27) }))
entity6744.getComponent(Transform).rotation.set(0, 0.3826834, 0, 0.9238796)
entity6744.getComponent(Transform).scale.set(1.5, 0.5, 1.5)
entity6744.addComponent(new BoxShape())
entity6744.getComponent(BoxShape).withCollisions = true
entity6744.addComponent(material23552)

var entity7588 = new Entity("obstacle (38)")
engine.addEntity(entity7588)
entity7588.addComponent(new Transform({ position: new Vector3(103.8, 1.3, 57) }))
entity7588.getComponent(Transform).rotation.set(0, 0.3826834, 0, 0.9238796)
entity7588.getComponent(Transform).scale.set(1.5, 0.5, 1.5)
entity7588.addComponent(new BoxShape())
entity7588.getComponent(BoxShape).withCollisions = true
entity7588.addComponent(material23552)

var entity24216 = new Entity("obstacle (15)")
engine.addEntity(entity24216)
entity24216.addComponent(new Transform({ position: new Vector3(38.88, 1.3, 24.06) }))
entity24216.getComponent(Transform).rotation.set(0, 0.5, 0, 0.8660254)
entity24216.getComponent(Transform).scale.set(1.5, 0.5, 1.5)
entity24216.addComponent(new BoxShape())
entity24216.getComponent(BoxShape).withCollisions = true
entity24216.addComponent(material23552)

var entity6746 = new Entity("obstacle (35)")
engine.addEntity(entity6746)
entity6746.addComponent(new Transform({ position: new Vector3(82.8, 1.3, 26) }))
entity6746.getComponent(Transform).rotation.set(0, 0.5, 0, 0.8660254)
entity6746.getComponent(Transform).scale.set(1.5, 0.5, 1.5)
entity6746.addComponent(new BoxShape())
entity6746.getComponent(BoxShape).withCollisions = true
entity6746.addComponent(material23552)

var entity7590 = new Entity("obstacle (39)")
engine.addEntity(entity7590)
entity7590.addComponent(new Transform({ position: new Vector3(100.8, 1.3, 56) }))
entity7590.getComponent(Transform).rotation.set(0, 0.5, 0, 0.8660254)
entity7590.getComponent(Transform).scale.set(1.5, 0.5, 1.5)
entity7590.addComponent(new BoxShape())
entity7590.getComponent(BoxShape).withCollisions = true
entity7590.addComponent(material23552)

var entity8198 = new Entity("obstacle (40)")
engine.addEntity(entity8198)
entity8198.addComponent(new Transform({ position: new Vector3(92.8, 1.3, 51) }))
entity8198.getComponent(Transform).rotation.set(0, 0.5, 0, 0.8660254)
entity8198.getComponent(Transform).scale.set(1.5, 0.5, 1.5)
entity8198.addComponent(new BoxShape())
entity8198.getComponent(BoxShape).withCollisions = true
entity8198.addComponent(material23552)

var entity10686 = new Entity("obstacle (56)")
engine.addEntity(entity10686)
entity10686.addComponent(new Transform({ position: new Vector3(92.7, 1.3, 33.2) }))
entity10686.getComponent(Transform).rotation.set(0, 0.5, 0, 0.8660254)
entity10686.getComponent(Transform).scale.set(1.5, 0.5, 1.5)
entity10686.addComponent(new BoxShape())
entity10686.getComponent(BoxShape).withCollisions = true
entity10686.addComponent(material23552)

var entity8432 = new Entity("obstacle (41)")
engine.addEntity(entity8432)
entity8432.addComponent(new Transform({ position: new Vector3(105.8, 1.3, 50) }))
entity8432.getComponent(Transform).rotation.set(0, 0, 0, 1)
entity8432.getComponent(Transform).scale.set(3, 0.5, 3)
entity8432.addComponent(new BoxShape())
entity8432.getComponent(BoxShape).withCollisions = true
entity8432.addComponent(material23552)

var entity10688 = new Entity("obstacle (57)")
engine.addEntity(entity10688)
entity10688.addComponent(new Transform({ position: new Vector3(105.7, 1.3, 32.2) }))
entity10688.getComponent(Transform).rotation.set(0, 0, 0, 1)
entity10688.getComponent(Transform).scale.set(3, 0.5, 3)
entity10688.addComponent(new BoxShape())
entity10688.getComponent(BoxShape).withCollisions = true
entity10688.addComponent(material23552)

var entity8744 = new Entity("obstacle (42)")
engine.addEntity(entity8744)
entity8744.addComponent(new Transform({ position: new Vector3(75.8, 1.3, 75) }))
entity8744.getComponent(Transform).rotation.set(0, 0, 0, 1)
entity8744.getComponent(Transform).scale.set(10, 0.5, 10)
entity8744.addComponent(new BoxShape())
entity8744.getComponent(BoxShape).withCollisions = true
entity8744.addComponent(material23552)

var entity9136 = new Entity("obstacle (43)")
engine.addEntity(entity9136)
entity9136.addComponent(new Transform({ position: new Vector3(115.8, 1.3, 35) }))
entity9136.getComponent(Transform).rotation.set(0, 0, 0, 1)
entity9136.getComponent(Transform).scale.set(10, 0.5, 10)
entity9136.addComponent(new BoxShape())
entity9136.getComponent(BoxShape).withCollisions = true
entity9136.addComponent(material23552)

var entity24034 = new Entity("obstacle (16)")
engine.addEntity(entity24034)
entity24034.addComponent(new Transform({ position: new Vector3(50.88, 1.3, 43.06) }))
entity24034.getComponent(Transform).rotation.set(0, 0.5, 0, 0.8660254)
entity24034.getComponent(Transform).scale.set(1.5, 0.5, 1.5)
entity24034.addComponent(new BoxShape())
entity24034.getComponent(BoxShape).withCollisions = true
entity24034.addComponent(material23552)

var entity11240 = new Entity("obstacle (69)")
engine.addEntity(entity11240)
entity11240.addComponent(new Transform({ position: new Vector3(94.1, 1.3, 69.7) }))
entity11240.getComponent(Transform).rotation.set(0, 0.5, 0, 0.8660254)
entity11240.getComponent(Transform).scale.set(1.5, 0.5, 1.5)
entity11240.addComponent(new BoxShape())
entity11240.getComponent(BoxShape).withCollisions = true
entity11240.addComponent(material23552)

var entity23774 = new Entity("GameObject")
engine.addEntity(entity23774)
entity23774.addComponent(new Transform({ position: new Vector3(0, 0, 0) }))
entity23774.getComponent(Transform).rotation.set(0, 0, 0, 1)
entity23774.getComponent(Transform).scale.set(1, 1, 1)

var entity23914 = new Entity("floor")
engine.addEntity(entity23914)
entity23914.addComponent(new Transform({ position: new Vector3(75.8, 0.4599998, 50) }))
entity23914.getComponent(Transform).rotation.set(0, 0, 0, 1)
entity23914.getComponent(Transform).scale.set(90, 1, 60)
entity23914.addComponent(new BoxShape())
entity23914.getComponent(BoxShape).withCollisions = true
var material23578 = new Material()
material23578.albedoColor = new Color3(1, 1, 1)
material23578.metallic = 0
material23578.roughness = 0
material23578.albedoTexture = new Texture("textures/floor.png")
material23578.emissiveColor = new Color3(1, 1, 0)
material23578.emissiveTexture = new Texture("textures/floor.png")
entity23914.addComponent(material23578)

var entity24296 = new Entity("ceil")
engine.addEntity(entity24296)
entity24296.addComponent(new Transform({ position: new Vector3(75.8, 9.46, 50) }))
entity24296.getComponent(Transform).rotation.set(0, 0, 0, 1)
entity24296.getComponent(Transform).scale.set(90, 1, 60)
entity24296.addComponent(new BoxShape())
entity24296.getComponent(BoxShape).withCollisions = true
entity24296.addComponent(material23578)

var entity23994 = new Entity("obstacle (1)")
engine.addEntity(entity23994)
entity23994.addComponent(new Transform({ position: new Vector3(32.88, 2.55, 34.06) }))
entity23994.getComponent(Transform).rotation.set(0, 0, 0, 1)
entity23994.getComponent(Transform).scale.set(3, 3, 0.5)
entity23994.addComponent(new BoxShape())
entity23994.getComponent(BoxShape).withCollisions = true
entity23994.addComponent(material23552)

