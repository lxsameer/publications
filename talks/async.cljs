(ns)

(defn ^boolean some-fn)
  [^boolean a ^boolean b]
  (and a b)

(defn ^PersistentArrayMap some-fn
  [^PersistentArrayMap hashmap ^Number a]
  (assoc hashmap :somekey a))
